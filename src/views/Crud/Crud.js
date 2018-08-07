/* eslint-disable react/jsx-wrap-multilines, lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import apiActions from '../../redux/api';
import thingActions from '../../redux/thing';
import CrudCard from './CrudCard';

const { func, shape, arrayOf, any, bool, number } = PropTypes;

class Crud extends Component {
  static propTypes = {
    showNotification: func.isRequired,
    things: arrayOf(any),
    apiStatus: shape({
      error: bool,
      count: number,
      fetching: bool
    }).isRequired,
    redux: shape({
      fetching: func.isRequired,
      createThing: func.isRequired,
      editThing: func.isRequired,
      removeThing: func.isRequired
    }).isRequired
  };
  static defaultProps = {
    things: []
  };
  constructor(props) {
    super(props);

    this.state = {
      notification_info: false,
      notification_success: false,
      notification_error: false,
      inputData: 'wtf',
      apiStatus: {
        error: false,
        fetching: false
      }
    };
  }
  static getDerivedStateFromProps(props, state) {
    const { showNotification } = props;
    const {
      apiStatus: stateStatus,
      notification_error,
      notification_info,
      notification_success
    } = state;
    const { apiStatus: nextStatus } = props;

    let icon, color, message;
    if (
      // If fetching was successfully completed
      stateStatus.fetching &&
      !stateStatus.error &&
      !nextStatus.error &&
      !nextStatus.fetching &&
      !notification_success
    ) {
      icon = 'pe-7s-diskette';
      color = 'success';
      message = 'Successfully updated database!';
      console.log('FIRE success');
      showNotification(icon, color, message);
      return {
        notification_success: true,
        notification_info: false,
        notification_error: false,
        inputData: '',
        apiStatus: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        }
      };
    }

    if (
      // If we just started fetching
      !nextStatus.error &&
      nextStatus.fetching &&
      !notification_info
    ) {
      icon = 'pe-7s-paper-plane';
      color = 'info';
      message = 'API Request in Progress';
      console.log('FIRE in progress');
      showNotification(icon, color, message);
      return {
        notification_success: false,
        notification_info: true,
        notification_error: false,
        inputData: '',
        apiStatus: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        }
      };
    }

    if (
      // if fetching yielded an error
      !stateStatus.error &&
      nextStatus.error &&
      !notification_error
    ) {
      icon = 'pe-7s-plug';
      color = 'info';
      message = 'Database update FAILED!';
      console.log('FIRE an error');
      showNotification(icon, color, message);
      return {
        notification_success: false,
        notification_info: false,
        notification_error: true,
        apiStatus: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        }
      };
    }

    // if there is some other reason this lifecycle method is called, then continue w/Reconcilliation.
    return null;
  }
  onChange = e => {
    this.setState({ inputData: e.target.value });
    e.persist();
  };
  onSubmit = e => {
    e.preventDefault();
    const { redux } = this.props;
    const { inputData } = this.state;

    redux.fetching();
    redux.createThing({ name: inputData });
    this.setState({ inputData: '' });
  };
  render() {
    const { redux, things } = this.props;
    const { inputData } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <CrudCard
                inputData={inputData}
                things={things}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                crudMethods={redux}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ things, api: apiStatus }) => ({
    things,
    apiStatus
  }),
  dispatch => ({
    redux: {
      fetching: () => dispatch(apiActions.fetching()),
      createThing: data => dispatch(thingActions.createThing(data)),
      removeThing: id => dispatch(thingActions.removeThing(id)),
      editThing: dataUpdate => dispatch(thingActions.editThing(dataUpdate))
    }
  })
)(Crud);

/* eslint-disable react/jsx-wrap-multilines, lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import apiActions from '../../redux/api';
import thingActions from '../../redux/thing';
import CrudCard from './CrudCard';

const { func, shape, arrayOf, string, bool, number } = PropTypes;

class Crud extends Component {
  static propTypes = {
    showNotification: func.isRequired,
    things: arrayOf(string),
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
      inputData: '',
      apiStatus: {
        error: false,
        fetching: false
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    const { showNotification } = this.props;
    const { apiStatus: stateStatus } = this.state;
    const { apiStatus: nextStatus } = nextProps;

    let icon, color, message;
    if (
      // If fetching was successfully completed
      stateStatus.fetching &&
      !stateStatus.error &&
      !nextStatus.error &&
      !nextStatus.fetching
    ) {
      icon = 'pe-7s-diskette';
      color = 'success';
      message = 'Successfully updated database!';
      showNotification(icon, color, message);
      this.setState({
        apiStatus: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        }
      });
      return true;
    }

    if (
      // If we just started fetching
      !nextStatus.error &&
      nextStatus.fetching
    ) {
      this.setState({
        apiStatus: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        }
      });
      icon = 'pe-7s-paper-plane';
      color = 'info';
      message = 'API Request in Progress';
      showNotification(icon, color, message);
      return true;
    }

    if (
      // if fetching yielded an error
      !stateStatus.error &&
      nextStatus.error
    ) {
      this.setState({
        apiStatus: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        }
      });
      icon = 'pe-7s-plug';
      color = 'info';
      message = 'Database update FAILED!';
      showNotification(icon, color, message);
      return true;
    }

    // if there is some other reason this lifecycle method is called, then continue w/Reconcilliation.
    return true;
  }
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
                // input={inputData}
                things={things}
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

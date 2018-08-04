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
      inputData: ''
    };
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
                input={inputData}
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

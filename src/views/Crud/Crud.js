/* eslint-disable react/jsx-wrap-multilines, lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import apiActions from '../../redux/api';
import thingActions from '../../redux/thing';

import { Card } from '../../components/Card/Card';
import { FormInline } from '../../components/FormInputs/FormInlineButton';
import CrudInput from './CrudInput';
// import { UserCard } from '../../components/UserCard/UserCard';
// import avatar from '../../assets/images/faces/face-3.jpg';
const { func, shape } = PropTypes;

class Crud extends Component {
  static propTypes = {
    redux: shape({
      fetching: func.isRequired,
      createThing: func.isRequired,
      editThing: func.isRequired,
      deleteThing: func.isRequired
    }).isRequired
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
    const { redux } = this.props;
    const { inputData } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <CrudInput crudMethods={redux} input={inputData} />
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
    fetching: () => dispatch(apiActions.fetching()),
    createThing: data => dispatch(thingActions.createThing(data)),
    removeThing: id => dispatch(thingActions.removeThing(id)),
    editThing: dataUpdate => dispatch(thingActions.editThing(dataUpdate))
  })
)(Crud);

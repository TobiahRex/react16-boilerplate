/* eslint-disable react/jsx-wrap-multilines, lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Card } from '../../components/Card/Card';
import { FormInline } from '../../components/FormInputs/FormInlineButton';
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
    })
  };
  constructor(props) {
    super(props);

    this.state = {
      newThing: ''
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.fetching();
    this.props.createThing({ name: this.state.newThing });
    this.setState({ newThing: '' });
  };
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="CRUD"
                category="Save & Retrieve Data from Mongo DB"
                content={
                  <FormInline
                    ncols={['col-md-8']}
                    properties={[
                      {
                        onSubmit: this.onSubmit,
                        label: 'New Thing',
                        type: 'text',
                        bsClass: 'form-control',
                        placeholder: 'Enter some data....',
                        buttons: [
                          {
                            type: 'button',
                            bsStyle: 'primary',
                            btnShape: 'fill',
                            title: 'Save'
                          },
                          {
                            type: 'button',
                            bsStyle: 'primary',
                            btnShape: '',
                            title: 'Clear'
                          }
                        ]
                      }
                    ]}
                  />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  state => {},
  dispatch => ({
    fetching: () => dispatch(apiActions.fetching)
  })
)(Crud);

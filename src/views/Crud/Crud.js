/* eslint-disable react/jsx-wrap-multilines, lines-between-class-members */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { Card } from '../../components/Card/Card';
import { FormInline } from '../../components/FormInputs/FormInlineButton';
// import { UserCard } from '../../components/UserCard/UserCard';
// import avatar from '../../assets/images/faces/face-3.jpg';

class UserProfile extends Component {
  onSubmit = e => {
    e.preventDefault();
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
                        bsStyle: 'primary',
                        type: 'text',
                        buttons: {
                          btn1: {
                            btnShape: 'fill',
                            title: 'Save',
                          },
                          btn2: {
                            btnShape: '',
                            title: 'Clear',
                          }
                        }
                        btnShape: 'fill',
                        bsClass: 'form-control',
                        defaultValue: 'Enter some data....'
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

export default UserProfile;

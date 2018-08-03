import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

import { Card } from '../../components/Card/Card';
import { FormInputs } from '../../components/FormInputs/FormInputs';
import { UserCard } from '../../components/UserCard/UserCard';
import Button from '../../components/CustomButton/CustomButton';

import avatar from '../../assets/images/faces/face-3.jpg';

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="CRUD"
                content={
                  <form>
                    <FormInputs
                      ncols={['col-md-8', 'col-md-4']}
                      properties={[
                        {
                          label: 'New Thing',
                          type: 'Enter some data...',
                          bsClass: 'form-control',
                          placeholder: 'Username',
                          defaultValue: 'michael23'
                        },
                        {
                          label: 'Email address',
                          type: 'email',
                          bsClass: 'form-control',
                          placeholder: 'Email'
                        }
                      ]}
                    />
                    <img src={avatar} alt="" />
                  </form>
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

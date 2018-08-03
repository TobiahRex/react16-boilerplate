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
        <Grid fluid />
        <img src={avatar} alt="" />
      </div>
    );
  }
}

export default UserProfile;

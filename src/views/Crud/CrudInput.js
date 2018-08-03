import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../components/Card/Card';
import FormInline from '../../components/FormInputs/FormInline';

import thingActions from '../../redux/thing';
import apiActions from '../../redux/api';
// import ThingList from './thingList';
// import InputNewThing from './newThing';

const CrudInput = ({ onSubmit, crudMethods, things, apiStatus }) => {
  return (
    <Card
      title="CRUD"
      category="Save & Retrieve Data from Mongo DB"
      content={
        <FormInline
          ncols={['col-md-8']}
          properties={[
            {
              onSubmit,
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
  );
};

const { func, string, shape, arrayOf, bool, number } = PropTypes;

CrudInput.propTypes = {
  crudMethods: shape({
    fetching: func,
    createThing: func,
    editThing: func,
    removeThing: func
  }).isRequired,
  things: arrayOf(string),
  apiStatus: shape({
    error: bool,
    count: number,
    fetching: bool
  }).isRequired
};

CrudInput.defaultProps = {
  things: []
};

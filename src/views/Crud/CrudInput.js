import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../../components/Card/Card';

import thingActions from '../../redux/thing';
import apiActions from '../../redux/api';
// import ThingList from './thingList';
// import InputNewThing from './newThing';

const Things = ({
  fetching,
  createThing,
  editThing,
  removeThing,
  things,
  apiStatus
}) => {
  const propsThingList = {
    fetching,
    editThing,
    removeThing,
    things,
    apiStatus
  };
  const propsInputNew = {
    fetching,
    createThing,
    apiStatus
  };

  return (
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
  );
};

const { func, arrayOf, objectOf, any } = PropTypes;

Things.propTypes = {
  fetching: func.isRequired,
  createThing: func.isRequired,
  editThing: func.isRequired,
  removeThing: func.isRequired,
  things: arrayOf(any),
  apiStatus: objectOf(any)
};

Things.defaultProps = {
  things: [],
  apiStatus: false
};

const mapStateToProps = ({ things, api }) => ({
  things,
  apiStatus: api
});
const mapDispatchToProps = dispatch => ({
  fetching: () => dispatch(apiActions.fetching()),
  createThing: thingName => dispatch(thingActions.createThing(thingName)),
  removeThing: thingId => dispatch(thingActions.removeThing(thingId)),
  editThing: thing => dispatch(thingActions.editThing(thing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Things);

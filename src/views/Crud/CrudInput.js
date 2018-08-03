import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import FormInline from '../../components/FormInputs/FormInline';
import CrudTable from './CrudTable';

const CrudInput = ({ onSubmit, crudMethods, things }) => {
  return (
    <Card
      title="CRUD"
      category="Save & Retrieve Data from Mongo DB"
      content={
        <React.Fragment>
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
          <CrudTable list={things} crudMethods={crudMethods} />
        </React.Fragment>
      }
    />
  );
};

const { func, string, shape, arrayOf } = PropTypes;

CrudInput.propTypes = {
  onSubmit: func.isRequired,
  handleNotification: func.isRequired,
  crudMethods: shape({
    fetching: func,
    createThing: func,
    editThing: func,
    removeThing: func
  }).isRequired,
  things: arrayOf(string)
};

CrudInput.defaultProps = {
  things: []
};

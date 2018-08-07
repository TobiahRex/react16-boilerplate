import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import CrudInput from '../../components/Forms/FormInline';
import CrudTable from './CrudTable';

const CrudCard = ({
  inputData,
  things,
  onChange,
  onSubmit,
  crudMethods: { editThing: cbEdit, removeThing: cbRemove }
}) => {
  return (
    <Card
      title="CRUD"
      category="Save & Retrieve Data from Mongo DB"
      content={
        <React.Fragment>
          <CrudInput
            ncols={['col-md-8']}
            properties={[
              {
                inputData,
                onChange,
                onSubmit,
                label: 'New Thing',
                type: 'text',
                placeholder: 'Enter some data....',
                buttons: [
                  {
                    // onSubmit,
                    type: 'submit',
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
          <CrudTable list={things} cbEdit={cbEdit} cbRemove={cbRemove} />
        </React.Fragment>
      }
    />
  );
};

const { func, any, shape, string, arrayOf } = PropTypes;

CrudCard.propTypes = {
  inputData: string.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  crudMethods: shape({
    fetching: func,
    createThing: func,
    editThing: func,
    removeThing: func
  }).isRequired,
  things: arrayOf(any)
};

CrudCard.defaultProps = {
  things: []
};

export default CrudCard;

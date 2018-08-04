import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import CrudInput from '../../components/Forms/FormInline';
import CrudTable from './CrudTable';

const CrudCard = ({
  things,
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
          <CrudTable list={things} cbEdit={cbEdit} cbRemove={cbRemove} />
        </React.Fragment>
      }
    />
  );
};

const { func, string, shape, arrayOf } = PropTypes;

CrudCard.propTypes = {
  onSubmit: func.isRequired,
  crudMethods: shape({
    fetching: func,
    createThing: func,
    editThing: func,
    removeThing: func
  }).isRequired,
  things: arrayOf(string)
};

CrudCard.defaultProps = {
  things: []
};

export default CrudCard;

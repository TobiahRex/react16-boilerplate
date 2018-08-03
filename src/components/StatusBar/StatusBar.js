/* eslint-disable react/prefer-stateless-function, react/jsx-wrap-multilines, lines-between-class-members */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card'; // eslint-disable-line

const { str, objectOf, any } = PropTypes;

class CrudTable extends React.Component {
  static propTypes = {
    type: str.isRequired,
    status: objectOf(any).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      error: false,
      count: false,
    }
  }

  determineType = () => {
    const { type } = this.props;

    switch(type) {
      case 'api': {

      },
      defult: throw Error('You must provide a status object to render the StatusBar component.');
    }
  };

  render() {
    const { type, status } = this.props;

    return (
      <div>
        <h1>Status Bar</h1>
      </div>
    );
  }
}

export default CrudTable;

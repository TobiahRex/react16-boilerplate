/* eslint-disable react/prefer-stateless-function, react/jsx-wrap-multilines, lines-between-class-members */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card'; // eslint-disable-line

const { str, objectOf, any } = PropTypes;

class ApiNotifications extends React.Component {
  static propTypes = {
    type: str.isRequired,
    status: objectOf(any).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      message: '',
      statusInfo: null,
      count: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { status: stateStatus } = this.state;
    const { status: nextStatus } = this.nextProps;

    if (
      // If fetching was successfully completed
      stateStatus.fetching &&
      !stateStatus.error &&
      !nextStatus.error &&
      !nextStatus.fetching
    ) {
      this.setState({
        message: 'Database updated SUCCESSFULLY!',
        status: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        },
        show: true
      });
      return true;
    }

    if (
      // If we just started fetching
      !nextStatus.error &&
      nextStatus.fetching
    ) {
      this.setState({
        message: 'API Request in Progress',
        status: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        },
        show: true
      });
      return true;
    }

    if (
      // if fetching yielded an error
      !stateStatus.error &&
      nextStatus.error
    ) {
      this.setState({
        message: 'Database update FAILED!',
        status: {
          error: nextStatus.error,
          fetching: nextStatus.fetching
        },
        show: true
      });
      return true;
    }

    // if there is some other reason this lifecycle method is called, then continue w/Reconcilliation.
    return true;
  }

  onUserClose = () => {
    this.setState(() => ({
      show: false
    }));
  };

  render() {
    const { show, message } = this.state;

    return (
      <div>
        <h1>Status Bar</h1>
      </div>
    );
  }
}

export default CrudTable;

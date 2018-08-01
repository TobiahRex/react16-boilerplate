import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
/*
This Component relies on a piece of state passed down in props.
Should contain, an error & fetching boolean.
*/
export default class apiSnackBar extends Component {
  static defaultProps = {
    apiStatus: {
      success: false,
      error: false,
      fetching: false
    }
  };

  static propTypes = {
    apiStatus: PropTypes.objectOf(PropTypes.any)
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      message: '',
      error: null,
      fetching: null
    };
  }

  componentWillMount() {
    const { apiStatus } = this.props;
    this.setState({
      error: apiStatus.error,
      fetching: apiStatus.fetching
    });
  }

  componentWillReceiveProps(nextProps) {
    const { error, fetching } = this.state;
    const apiError = nextProps.apiStatus.error;
    const apiFetching = nextProps.apiStatus.fetching;

    if (!error && fetching && !apiError && !apiFetching) {
      // If fetching was successfully completed
      this.setState({
        message: 'Database updated SUCCESSFULLY!',
        error: false,
        fetching: false,
        show: true
      });
      return true;
    }

    if (!apiError && apiFetching) {
      // If we just started fetching
      this.setState({
        message: 'API Request in Progress',
        error: false,
        fetching: true,
        show: true
      });
      return true;
    }

    if (!error && apiError) {
      // if fetching yielded an error
      this.setState({
        message: 'Database update FAILED!',
        error: true,
        fetching: false,
        show: true
      });
      return true;
    }
    return true;
  }

  render() {
    const { show, message } = this.state;
    const PROPS = {
      message,
      open: show,
      autoHideDuration: 2000,
      onRequestClose: () => this.setState({ show: false })
    };
    return (
      <div>
        <Snackbar {...PROPS} />
      </div>
    );
  }
}

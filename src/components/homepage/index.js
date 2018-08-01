import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Home = ({ children }) => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title">React 16 | RR 4 Boilerplate</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </React.Fragment>
);
const { objectOf, any } = PropTypes;
Home.propTypes = {
  children: objectOf(any)
};
Home.defaultProps = {
  children: null
};

export default Home;

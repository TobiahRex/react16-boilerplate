/* eslint-disable import/no-named-as-default, react/prefer-stateless-function */
import { NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';

import HomePage from './homepage';
import Things from './containers/Things';
import NotFoundPage from './notFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/things" activeStyle={activeStyle}>
            Demo App
          </NavLink>
          {' | '}
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/things" component={Things} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element //eslint-disable-line
};

export default hot(module)(App);

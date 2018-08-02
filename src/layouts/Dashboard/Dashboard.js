/* eslint-disable lines-between-class-members */

import React from 'react';
import { Switch, Redirect, Route, NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import dashboardRoutes from '../../routes/Dashboard';

class Dashboard extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className="wrapper">
        <Header {...this.props} />
        <div id="main-panel" className="main-panel">
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/cryptos" activeStyle={activeStyle}>
            Demo Crypto Table
          </NavLink>
          {' | '}
          <NavLink to="/things" activeStyle={activeStyle}>
            Demo CRUD
          </NavLink>
          {' | '}
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              }
              return (
                <Route
                  path={prop.path}
                  name={prop.name}
                  key={key}
                  component={prop.component}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;

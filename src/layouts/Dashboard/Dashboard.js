import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import dashboardRoutes from '../../routes/Dashboard';

class Dashboard extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <React.Fragment>
        <h1>React-Boilerplate</h1>
        <div>
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
        </div>
        <Switch>
          {dashboardRoutes.map((prop, key) => {
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
      </React.Fragment>
    );
  }
}

export default Dashboard;

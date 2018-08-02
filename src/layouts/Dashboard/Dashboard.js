/* eslint-disable lines-between-class-members */

import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import dashboardRoutes from '../../routes/Dashboard';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props} />
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

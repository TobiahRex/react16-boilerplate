import React from 'react';
import { Switch, Route } from 'react-router-dom';
import dashboardRoutes from '../../routes/Dashboard';

class Dashboard extends React.Component {
  render() {
    return (
      <Switch>
        {dashboardRoutes.map((prop, key) => {
          return <Route path={prop.path} name={prop.name} />;
        })}
      </Switch>
    );
  }
}

export default Dashboard;

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import dashboardRoutes from '../../routes/Dashboard';

class Dashboard extends React.Component {
  render() {
    return [
      <h1>React-Boilerplate</h1>,
      <Link to="/cryptos">Cryptos</Link>,
      <Switch>
        {dashboardRoutes.map((prop, key) => {
          return <Route path={prop.path} name={prop.name} key={key} />;
        })}
      </Switch>
    ];
  }
}

export default Dashboard;

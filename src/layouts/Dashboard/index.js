/* eslint-disable lines-between-class-members, camelcase */

import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import dashboardRoutes from '../../routes/Dashboard';
import { styleNotifications } from '../../variables';

class Dashboard extends React.Component {
  static ref_notificationSys = null;
  static ref_mainPanel = null;

  constructor(props) {
    super(props);

    this.state = {
      _notificationSystem: null
    };
  }
  componentDidMount() {
    this.setState({
      _notificationSystem: this.ref_notificationSys.notificationSystem
    });
  }

  handleNotificationClick(position) {
    const color = Math.floor(Math.random() * 4 + 1);
    let level;
    switch (color) {
      case 1:
        level = 'success';
        break;
      case 2:
        level = 'warning';
        break;
      case 3:
        level = 'error';
        break;
      case 4:
        level = 'info';
        break;
      default:
        break;
    }
    const { _notificationSystem } = this.state;
    _notificationSystem.addNotification({
      level,
      position,
      autoDismiss: 15,
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      )
    });
  }
  render() {
    return (
      <div className="wrapper">
        <NotificationSystem
          style={styleNotifications}
          ref={c => {
            this.notificationComp = c;
          }}
        />
        <Sidebar {...this.props} />
        <div
          id="main-panel"
          className="main-panel"
          ref={c => {
            this.ref_mainPanel = c;
          }}
        >
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

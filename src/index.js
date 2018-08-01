/* eslint-disable import/default, global-require */
import 'babel-polyfill';
// require('./images/favicon.ico'); // Tell webpack to load favicon.ico
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore, { history } from './redux/configureStore';
import Root from './views/Root';
import './styles/style.scss'; //eslint-disable-line
import './styles/light-bootstrap-dashboard.css';

const { store, persistor } = configureStore();

render(
  <React.Fragment>
    <AppContainer>
      <PersistGate loading={null} persistor={persistor}>
        <Root store={store} history={history} />
      </PersistGate>
    </AppContainer>
  </React.Fragment>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./views/Root', () => {
    const NewRoot = require('./views/Root').default;
    render(
      <AppContainer>
        <PersistGate loading={null} persistor={persistor}>
          <NewRoot store={store} history={history} />
        </PersistGate>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

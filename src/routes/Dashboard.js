import Cryptos from '../views/Cryptos/Cryptos';
import Dashboard from '../views/Dashboard/Dashboard';

const dashboardRoutes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/cryptos',
    component: Cryptos
  }
];

export default dashboardRoutes;

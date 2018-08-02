import Cryptos from '../views/Cryptos/Cryptos';
import Title from '../views/Title/Title';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Title
  },
  {
    path: '/cryptos',
    name: 'Cryptos',
    component: Cryptos
  },
  {
    redirect: true,
    path: '/',
    to: '/dashboard',
    name: 'Dashboard',
    component: Title
  }
];

export default dashboardRoutes;

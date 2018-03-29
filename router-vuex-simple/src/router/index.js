import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/modules/dashboard/Dashboard';
import eventsRoutes from '@/modules/events/routes';

Vue.use(Router);

const combineRoutes = () => {
  let routes = [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  }];
  routes = [
    ...routes,
    eventsRoutes,
  ];

  return routes;
};

export default new Router({
  mode: 'history',
  routes: combineRoutes(),
});

import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/modules/dashboard/Dashboard';

Vue.use(Router);

const combineRoutes = () => {
  const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/modules/events/Events'),
    },
    {
      path: '*',
      name: '404',
      component: {
        render(h) {
          return (
            <div>Page Not Found</div>
          );
        },
      },
    },
  ];
  return routes;
};

export default new Router({
  mode: 'history',
  routes: combineRoutes(),
});

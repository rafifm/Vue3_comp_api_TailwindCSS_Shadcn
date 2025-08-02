import type { RouteRecordRaw } from 'vue-router';
import PublicLayout from '../layouts/PublicLayout.vue';
import Home from '../views/Public/Home.vue';
import Login from '../views/Public/Login.vue';

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default publicRoutes;
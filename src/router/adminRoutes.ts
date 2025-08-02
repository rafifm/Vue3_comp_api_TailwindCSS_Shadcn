import type { RouteRecordRaw } from 'vue-router';
import AdminLayout from '../layouts/AdminLayout.vue';
import Dashboard from '../views/Admin/Dashboard.vue';
import Users from '../views/Admin/Users.vue';
import Roles from '../views/Admin/Roles.vue';
import Menus from '../views/Admin/Menus.vue';

const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: Dashboard,
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: Users,
      },
      {
        path: 'roles',
        name: 'AdminRoles',
        component: Roles,
      },
      {
        path: 'menus',
        name: 'AdminMenus',
        component: Menus,
      },
    ],
  },
];

export default adminRoutes;
import type {  RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import {createRouter, createWebHistory} from 'vue-router'
import adminRoutes from './adminRoutes';
import publicRoutes from './publicRoutes';

const routes: Array<RouteRecordRaw> = [
  ...publicRoutes,
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('access_token');
};

router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !isAuthenticated()) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
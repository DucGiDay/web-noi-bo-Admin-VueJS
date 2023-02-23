import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import RoutesStock from '@/views/stocks/services/routes'
import RoutesUser from '@/views/user/services/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Dashboard.vue')
        },
        ...RoutesStock,
        ...RoutesUser
      ],
    },
    {
      path: '/landing',
      name: 'Landing',
      component: () => import('@/views/demo/Landing.vue')
    },
    {
      path: '/stocks/notfound',
      name: 'Notfound',
      component: () => import('@/views/demo/NotFound.vue')
    },

    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('@/views/user/auth/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('@/views/user/auth/Register.vue')
    },
    {
      path: '/auth/access',
      name: 'AccessDenied',
      component: () => import('@/views/user/auth/Access.vue')
    },
    {
      path: '/auth/error',
      name: 'Error',
      component: () => import('@/views/user/auth/Error.vue')
    }
  ]
});

router.beforeEach(async (to) => {
  const token = localStorage.getItem('token');
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth/login', '/auth/register'];
  const authRequired = !publicPages.includes(to.path);
  const auth = token;

  if (authRequired && !auth) {
    return '/auth/login';
  }
});

export default router;

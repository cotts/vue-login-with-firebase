import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/components/Home';
import Login from '@/components/Login';
import Cadastro from '@/components/Cadastro';
import Index from '@/components/Index';

Vue.use(Router);

/** configuring routes */
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

/** rule to check the auth state to redirect */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(info => info.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('/');
  else if (!requiresAuth && currentUser) next('index');
  else next();
});

export default router;

import VueRouter from 'vue-router';
import store from '../store'

// Routers
import AuthRouter from './auth'
import AdminRouter from './admin'
import FrontendRouter from './frontend'

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...AuthRouter,
    ...AdminRouter,
    ...FrontendRouter
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      if (to.matched.some(record => record.meta.guardAdmin)) {
        if (store.getters.authGuard == 'admin') {
          next()
          return
        }
        next('/')
        return
      }
      next()
      return
    }
    next('/login')
  } else {
    next()
  }

  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isLoggedIn) {
      if (store.getters.authGuard == 'admin') {
        next('/admin/dashboard');
        return;
      }
      next('/dashboard');
      return;
    }
    next()
  } else {
    next();
  }
})

export default router;
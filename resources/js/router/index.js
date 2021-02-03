import VueRouter from 'vue-router';
import store from '../store'

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
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router;
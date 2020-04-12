import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
// import cats from '../views/cats'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'cats',
    //   component: cats
    // },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
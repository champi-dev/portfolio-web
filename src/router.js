import Vue from 'vue'
import Router from 'vue-router'
import Home from 'Home'
import Contact from 'Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      component: Home
    }
  ]
})

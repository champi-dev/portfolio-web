import Vue from 'vue'
import Router from 'vue-router'
import Home from 'Home'
import Contact from 'Contact'
import Work from 'Work'

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
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '*',
      component: Home
    }
  ]
})

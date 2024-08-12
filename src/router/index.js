import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router

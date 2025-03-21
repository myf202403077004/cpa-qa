import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/loginView.vue'
import HomePage from '@/views/homePage.vue'
import User from '@/views/userView.vue'
import allQA from '@/views/q-aView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/allQA',
      name: 'allQA',
      component: allQA
    },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/loginView.vue'
import HomePage from '@/views/homePage.vue'
import User from '@/views/userView.vue'
import allQA from '@/views/q-aView.vue'
import Rank from '@/components/rankView.vue'
import Qst from '@/views/qstView.vue'



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
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/allQA',
      name: 'allQA',
      component: allQA
    },
    {
      path: '/qst',
      name: 'qst',
      component: Qst
    },
  ],
})

export default router

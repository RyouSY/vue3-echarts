import { createRouter, createWebHistory } from 'vue-router'
import page1 from '../views/page1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('../views/page3.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/',
      name: 'home',
      component: index,
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/views/index/index.vue')
        }
      ]
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/views/page1.vue')
    }
  ]
})

export default router

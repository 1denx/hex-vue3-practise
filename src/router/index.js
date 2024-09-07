import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wk1',
      name: 'wk1',
      component: () => import('../views/WeekOneView.vue')
    }
    ,
    {
      path: '/wk2',
      name: 'wk2',
      component: () => import('../views/WeekTwoView.vue')
    }
    ,
    {
      path: '/wk3',
      name: 'wk3',
      component: () => import('../views/WeekthreeView.vue')
    }
  ]
})

export default router

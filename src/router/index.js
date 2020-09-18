import { createRouter, createWebHistory } from 'vue-router'
import homeRoute from './modules/home'
import categoryRoute from './modules/category'
import cartRoute from './modules/cart'
import topicRoute from './modules/topic'
import mineRoute from './modules/mine'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    homeRoute,
    cartRoute,
    categoryRoute,
    topicRoute,
    mineRoute,
    {
      path: '/**',
      component: () => import('../common/not-find.vue')
    }
  ]
})

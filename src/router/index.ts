import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/view/login/LoginIndex.vue')
  },
  {
    path: '/main',
    component: () => import('@/view/main/MainIndex.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router

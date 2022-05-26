import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCatch from '@/utils/cache'

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

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCatch.getCache('token', 'localStorage')
    if (!token) {
      return '/login'
    }
  }
})

export default router

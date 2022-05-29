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
    name: 'login',
    component: () => import('@/view/login/LoginIndex.vue'),
    children: []
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/view/main/Main.vue')
    // children: []
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/view/error/404.vue'),
    children: []
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

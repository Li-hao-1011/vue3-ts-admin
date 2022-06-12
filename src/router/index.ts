import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCatch from '@/utils/cache'
import { firstMenu } from '@/utils/mapMenus'

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
    // redirect: '/main/',
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

    if (to.path === '/main') {
      return firstMenu.url
    }
  }
})

export default router

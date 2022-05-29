import type { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/Breadcrumb'

let firstMenu: any = null

export default function userMapMenu(userMenus: any[]) {
  // 使用webpack的函数获取到路由路径数组
  const menuFiles = require.context('../router/main', true, /\.ts/)
  const allRouters: RouteRecordRaw[] = []
  menuFiles.keys().forEach((key) => {
    const path = key.split('.')[1]
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + path)

    allRouters.push(route.default)
  })

  return _recurseGetRoute(userMenus, allRouters, [])
}

// 获取到与 userMnues 中匹配的路由
function _recurseGetRoute(
  menus: any[],
  allRouters: RouteRecordRaw[],
  result: any[]
): RouteRecordRaw[] {
  menus.forEach((item) => {
    if (item.type === 2) {
      // 获取到路由
      const route = allRouters.find((route) => {
        return route.path === item.url
      })
      if (route) {
        result.push(route)
      }
      // 获取到第一个菜单
      if (!firstMenu) {
        firstMenu = route
      }
    } else {
      _recurseGetRoute(item.children, allRouters, result)
    }
  })

  return result
}

// 导出获取到的第一个菜单
export { firstMenu }

// 根据route路径匹配对应的路由(目标是获取到id)
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    //
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

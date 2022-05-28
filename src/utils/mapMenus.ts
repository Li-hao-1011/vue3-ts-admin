import type { RouteRecordRaw } from 'vue-router'

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
    } else {
      _recurseGetRoute(item.children, allRouters, result)
    }
  })

  return result
}

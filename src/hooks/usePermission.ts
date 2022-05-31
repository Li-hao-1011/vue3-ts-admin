import { userStore } from '@/store'

export function usePermission(pageName: string, handle: string) {
  const store = userStore()
  // const permissions = store.state.login.permissions
  const permissions: any[] = []
  const handlePermission = `${pageName}:${handle}`
  return !!permissions.find((item) => item.indexOf(handlePermission) !== -1)
}

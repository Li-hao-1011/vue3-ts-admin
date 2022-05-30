import { App } from 'vue'

import { formatUTCString } from '@/utils/date-format'

export default function (app: App) {
  // 将 $filters 注册到 vue实例中
  app.config.globalProperties.$filters = {
    formatTime(value: string): string {
      //
      return formatUTCString(value)
    }
  }
}

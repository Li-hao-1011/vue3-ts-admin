import { App } from 'vue'

import { formatUTCString } from '@/utils/date-format'

export default function (app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string): string {
      //
      return formatUTCString(value)
    }
  }
}

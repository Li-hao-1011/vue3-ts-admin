import { App } from 'vue'

import registerElement from './register-element'

export function globalRegister(app: App): void {
  // registerElement(app)
  app.use(registerElement)
  /*  console.log(app)
  console.log(app.use) */
}

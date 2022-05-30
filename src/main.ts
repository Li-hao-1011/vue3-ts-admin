import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'

import { setupStore } from './store/index'

const app = createApp(App)
app.use(store)
//
setupStore()
app.use(router)

// 内部会调用 globalRegister 并传入app, 源码如下
/*
  use(plugin, ...options) {
  if()...
  else if (isFunction(plugin)) {
  installedPlugins.add(plugin);
  plugin(app, ...options);
  }
*/
app.use(globalRegister)
// registerApp(app)

// app.config.globalProperties.$filters = {
//   formatTime(value: string) {
//     //
//     return '2022-05-21'
//   }
// }

app.mount('#app')

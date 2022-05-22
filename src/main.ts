import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'

const app = createApp(App)
app.use(router)
app.use(store)

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

app.mount('#app')

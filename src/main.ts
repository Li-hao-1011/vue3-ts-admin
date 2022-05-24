import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'

// import lhRequest from './service/index'

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

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

/* type RequestType = {
  success: boolean
  data: any
  returnCode: string
}

lhRequest
  .request<RequestType>({
    url: '/home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的 requestInterceptor')
        return config
      },
      responseInterceptor: (config) => {
        console.log('单独请求的 responseInterceptor')
        return config
      }
    }
    // showLoading: true
  })
  .then((res) => {
    console.log('1', res)
  })
  .catch((err) => {
    console.log('1', err)
  })

lhRequest
  .get<RequestType>({
    url: '/home/multidata',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的 requestInterceptor')
        return config
      },
      responseInterceptor: (config) => {
        console.log('单独请求的 responseInterceptor')
        return config
      }
    }
    // showLoading: true
  })
  .then((res) => {
    console.log('2', res)
  })
  .catch((err) => {
    console.log('2', err)
  }) */

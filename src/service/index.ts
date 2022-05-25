import LHRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const lhRequest = new LHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const token = ''
      // if (token) {
      // config.headers.token = token
      // }
      // console.log('局部请求拦截器')
      return config
    },
    requestInterceptorCatch: (err) => err,

    responseInterceptor: (config) => {
      // console.log('局部响应拦截器')

      return config
    },
    responseInterceptorCatch: (err) => err
  }
})

export default lhRequest

import LHRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

import localCatch from '@/utils/cache'

import { LHRequestConfig } from './request/type'

const lhRequest = new LHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: LHRequestConfig) => {
      // 保存 token
      const token = localCatch.getCache('token', 'localStorage')
      /*
        因为 config.headers 的类型是 AxiosRequestHeaders | undefined
        可能出现 undefined
        解决:
          1.判断 config.headers
            if (token && config && config.headers) {
              config.headers.Authorization = `Bearer ${token}`
            }
          2.对类型进行覆盖 此类型 LHRequestConfig
            import { LHRequestConfig } from './request/type'interface LHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
              interceptors?: LHInterceptors<T>
              showLoading?: boolean
              headers?: any
              loadingText?: string
            }
       */
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
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

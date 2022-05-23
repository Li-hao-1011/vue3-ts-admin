import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface LHInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any

  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface LHRequestConfig extends AxiosRequestConfig {
  interceptors?: LHInterceptors
  showLoading?: boolean
}

export { LHInterceptors, LHRequestConfig }

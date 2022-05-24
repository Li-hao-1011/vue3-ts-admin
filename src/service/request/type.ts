import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface LHInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any

  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface LHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LHInterceptors<T>
  showLoading?: boolean
}

export { LHInterceptors, LHRequestConfig }

import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { LHInterceptors, LHRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

/**
 * 默认显示 loading
 */
const DEFAULT_LOADING = false
class LhRequest {
  instance: AxiosInstance
  interceptors?: LHInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: LHRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // request拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // response 拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例中都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局request拦截器')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局response拦截器')

        if (this.showLoading) {
          setTimeout(() => {
            this.loading?.close()
          }, 1000)
        }

        const { data } = res
        if (data?.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return res.data
        }
      },
      (err) => {
        if (this.showLoading) {
          setTimeout(() => {
            this.loading?.close()
          }, 1000)
        }
        if (err.response.status === 404) {
          // console.log('404 Error')
        }
        return err
      }
    )
  }

  request<T>(config: LHRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === !DEFAULT_LOADING) {
        this.showLoading = config.showLoading
      }

      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        },
        (err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        }
      )
    })
  }

  get<T>(config: LHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: LHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T>(config: LHRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default LhRequest

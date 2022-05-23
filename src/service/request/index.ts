import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { LHInterceptors, LHRequestConfig } from './type'

import { ElLoading } from 'element-plus'
// import type {  } from 'element-plus/es/components/loading/src/lo'

class LhRequest {
  instance: AxiosInstance
  interceptors?: LHInterceptors
  showLoading: boolean
  loading?: any

  constructor(config: LHRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

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
        console.log('全局request拦截器')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            target: '正在加载...',
            background: 'rgba(0,0,0,0.5)'
          })
        }

        return config
      },
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局response拦截器')
        if (this.showLoading) {
          this.loading?.close()
        }
        const { data } = res
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return res.data
        }
      },
      (err) => {
        if (this.showLoading) {
          this.loading?.close()
        }
        if (err.response.status === 404) {
          console.log('404 Error')
        }
        return err
      }
    )
  }

  request(config: LHRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    if (!config.showLoading === true) {
      this.showLoading = false
    }

    this.instance.request(config).then(
      (res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }

        console.log(res)

        this.showLoading = true
      },
      (err) => {
        console.log(err)
      }
    )
  }
}

export default LhRequest

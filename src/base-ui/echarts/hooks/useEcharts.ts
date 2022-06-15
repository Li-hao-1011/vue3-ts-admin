import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el)

  const setOptions = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }

  const updataResize = (): void => {
    console.log('改变了' + 'echartsInstance.resize()')
    setTimeout(() => {
      echartsInstance.resize()
    }, 200)
  }

  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })

  return {
    echartsInstance,
    setOptions,
    updataResize
  }
}

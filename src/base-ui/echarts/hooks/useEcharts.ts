import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el)

  const setOptions = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }

  const updataResize = (): void => {
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

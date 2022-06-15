<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, defineEmits, watch, nextTick } from 'vue'
// import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import useEcharts from '../hooks/useEcharts'

// 定义 props

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
    isCollapse: boolean
  }>(),
  {
    width: '100%',
    height: '360px',
    isCollapse: false
  }
)
// const emit = defineEmits(['updataIsCollapse'])

const chartRef = ref<HTMLElement>()

onMounted(() => {
  // const echartsInstance = echarts.init(chartRef.value!, 'light', {
  //   renderer: 'svg'
  // })

  // props.options && echartsInstance.setOption(props.options)

  const { updataResize, setOptions, echartsInstance } = useEcharts(chartRef.value!)
  setOptions(props.options)
  // emit('updataIsCollapse', updataResize)
  // emit('updataIsCollapse')
  /*   watch(
    () => props.isCollapse,
    () => {
      // updataResize()
      nextTick(() => {
        echartsInstance.resize()
      })
    },
    { immediate: true }
  ) */
})
</script>

<template>
  <div classecharts>
    <div ref="chartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<style lang="less" scoped></style>

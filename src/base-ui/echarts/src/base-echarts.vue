<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watch, computed, watchEffect } from 'vue'
// import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import useEcharts from '../hooks/useEcharts'

// 定义 props

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
    isCollapse?: boolean
  }>(),
  {
    width: '100%',
    height: '360px',
    isCollapse: false
  }
)

const chartRef = ref<HTMLElement>()

onMounted(() => {
  const { updataResize, setOptions } = useEcharts(chartRef.value!)

  watchEffect(() => {
    setOptions(props.options)
  })
  const isChange = computed(() => props.isCollapse)
  watch(isChange, () => {
    updataResize()
  })
})
</script>

<template>
  <div classecharts>
    <div ref="chartRef" :style="{ width: width, height: '360px' }"></div>
  </div>
</template>

<style lang="less" scoped></style>

<template>
  <div>
    <BaseEcharts :options="option"></BaseEcharts>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import * as echarts from 'echarts'
import BaseEcharts from '@/base-ui/echarts'

import { ILineType } from '../types'

const props = defineProps<{
  lineData: ILineType
}>()

type EChartsOption = echarts.EChartsOption
const option = computed(
  (): EChartsOption => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    grid: {
      left: '8%',
      right: '2%',
      bottom: '6%',
      containLabel: false
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.lineData.xAxis
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分类销量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.lineData.value
      }
    ]
  })
)
</script>
<style scoped lang="less"></style>

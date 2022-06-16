<template>
  <div>
    <BaseEcharts :options="options" :is-collapse="isCollapse"></BaseEcharts>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { IDataType } from '../types'
import BaseEcharts from '@/base-ui/echarts'
import { useStore } from '@/store'

type EChartsOption = echarts.EChartsOption

const store = useStore()
const isCollapse = computed(() => store.state.isCollapse)

const props = withDefaults(
  defineProps<{
    pieData: IDataType[]
  }>(),
  {}
)

const options = computed((): EChartsOption => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>
<style scoped lang="less"></style>

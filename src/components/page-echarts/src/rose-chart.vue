<template>
  <div>
    <BaseEcharts :options="option"></BaseEcharts>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import * as echarts from 'echarts'
import BaseEcharts from '@/base-ui/echarts'
import { IDataType } from '../types'

const props = defineProps<{
  roseData: IDataType[]
}>()

type EChartsOption = echarts.EChartsOption
const option = computed(
  (): EChartsOption => ({
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 120],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  })
)
</script>
<style scoped lang="less"></style>

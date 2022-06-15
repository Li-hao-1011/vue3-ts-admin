<template>
  <div class="dashboard">
    <el-row class="dashboard-col" :gutter="10">
      <el-col :span="7">
        <LhCard title="分类商品数量(饼图)">
          <template>
            <div ref="goodsCountRef" style="width: 100%; height: 350px"></div>
          </template>
        </LhCard>
      </el-col>
      <el-col :span="10">
        <LhCard title="不同城市商品销量">
          <BaseEchart :options="options" :is-collapse="isCollapse"></BaseEchart>
        </LhCard>
      </el-col>
      <el-col :span="7">
        <LhCard title="分类商品数量(玫瑰图)"></LhCard>
      </el-col>
    </el-row>

    <el-row class="dashboard-col" :gutter="20">
      <el-col :span="12">
        <LhCard title="分类商品的销量"></LhCard>
      </el-col>
      <el-col :span="12">
        <LhCard title="分类商品的收藏"></LhCard>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed } from 'vue'
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

import { useStore } from '@/store'
import LhCard from '@/base-ui/card'
import BaseEchart from '@/base-ui/echarts'

export default defineComponent({
  name: 'AnalysisDashboard',
  components: { LhCard, BaseEchart },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction', {})

    let updataResize: () => void = () => {
      //
      console.log('改变了 888888888')
    }
    const isCollapse = computed(() => store.state.isCollapse)
    // watch(
    //   () => ,
    //   () => {
    //     console.log('改变了')
    //     updataResize()
    //   }
    // )

    const categoryGoodsCount = computed(() => store.state.dashboard.categoryGoodsCount)
    const constcategoryGoodsSale = computed(() => store.state.dashboard.categoryGoodsSale)
    const constcategoryGoodsFavor = computed(() => store.state.dashboard.categoryGoodsFavor)
    const constaddressGoodsSale = computed(() => store.state.dashboard.addressGoodsSale)

    // const divRef = ref<HTMLElement>()
    const options: EChartsOption = {
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Line 1',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
          name: 'Line 2',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
          name: 'Line 3',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(55, 162, 255)'
              },
              {
                offset: 1,
                color: 'rgb(116, 21, 219)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
          name: 'Line 4',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 135)'
              },
              {
                offset: 1,
                color: 'rgb(135, 0, 157)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
          name: 'Line 5',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 191, 0)'
              },
              {
                offset: 1,
                color: 'rgb(224, 62, 76)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 302, 181, 234, 210, 290, 150]
        }
      ]
    }

    return { options, updataResize, isCollapse }
  }
})
</script>
<style scoped lang="less">
.dashboard-col {
  margin-bottom: 35px;
}
</style>

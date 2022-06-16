<template>
  <div class="dashboard">
    <el-row class="dashboard-col" :gutter="10">
      <el-col :span="7">
        <LhCard title="分类商品数量(饼图)">
          <pie-chart :pie-data="categoryGoodsCount"></pie-chart>
        </LhCard>
      </el-col>
      <el-col :span="10">
        <LhCard title="不同城市商品销量">
          <MapChart :map-data="constaddressGoodsSale"></MapChart>
        </LhCard>
      </el-col>
      <el-col :span="7">
        <LhCard title="分类商品数量(玫瑰图)">
          <RoseChart :rose-data="categoryGoodsCount"></RoseChart>
        </LhCard>
      </el-col>
    </el-row>

    <el-row class="dashboard-col" :gutter="20">
      <el-col :span="12">
        <LhCard title="分类商品的销量">
          <LineChart :line-data="categoryGoodsSaleXLabels"></LineChart>
        </LhCard>
      </el-col>
      <el-col :span="12">
        <LhCard title="分类商品的收藏">
          <BarChart :bar-data="constcategoryGoodsFavor"></BarChart>
        </LhCard>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'
import LhCard from '@/base-ui/card'
import { PieChart, RoseChart, LineChart, BarChart, MapChart } from '@/components/page-echarts'

export default defineComponent({
  name: 'AnalysisDashboard',
  components: { LhCard, PieChart, RoseChart, LineChart, BarChart, MapChart },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction', {})

    const isCollapse = computed(() => store.state.isCollapse)

    const categoryGoodsCount = computed(() =>
      store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    )

    const categoryGoodsSaleXLabels = computed(() => {
      const xLabels: string[] = []
      const value: number[] = []
      store.state.dashboard.categoryGoodsSale.forEach((item) => {
        xLabels.push(item.name)
        value.push(item.goodsCount)
      })
      return {
        xAxis: xLabels,
        value: value
      }
    })
    const constcategoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const value: number[] = []
      store.state.dashboard.categoryGoodsFavor.forEach((item) => {
        xLabels.push(item.name)
        value.push(item.goodsFavor)
      })
      return {
        xAxis: xLabels,
        value: value
      }
    })

    const constaddressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      isCollapse,
      categoryGoodsCount,
      categoryGoodsSaleXLabels,
      constcategoryGoodsFavor,
      constaddressGoodsSale
    }
  }
})
</script>
<style scoped lang="less">
.dashboard-col {
  margin-bottom: 35px;
}
</style>

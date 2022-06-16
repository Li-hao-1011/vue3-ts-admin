<template>
  <div>
    <PageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #imgUrl="scope">
        <!-- <teleport to="body"> -->
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        ></el-image>
        <!-- </teleport> -->
      </template>
      <template #oldPrice="scope"> {{ '￥' + scope.row.oldPrice }} </template>
    </PageContent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'ProductGoods',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>
<style scoped lang="less"></style>

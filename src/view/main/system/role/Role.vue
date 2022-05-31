<template>
  <div class="role">
    <div class="search">
      <role-search :search-config="searchFormConfig"></role-search>
    </div>
    <div class="content">
      <role-content :content-table-config="contentTableConfig" page-name="role"> </role-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import RoleSearch from '@/components/page-search'
import RoleContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'SystemRole',
  components: { RoleContent, RoleSearch },

  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>
<style scoped lang="less">
.role {
  .content {
    border-top: 20px solid #eee;
  }
}
</style>

<template>
  <div class="user">
    <div class="search">
      <user-search
        :search-config="searchFormConfig"
        @searchBtnClick="queryBtnClick"
        @resetBtnClick="resetBtnClick"
      ></user-search>
    </div>
    <div class="content">
      <user-content ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="users">
      </user-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'

import UserSearch from '@/components/page-search'
import UserContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

// import { IFormItem } from '@/base-ui/LhFrom'
// import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
// import { usePageModal } from '@/hooks/usePageModal'
// import PageConetnt from '@/components/page-content'

type IHandler = () => void

export default defineComponent({
  name: 'SystemUsre',
  components: { UserSearch, UserContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const resetBtnClick: IHandler = handleResetClick as IHandler
    const queryBtnClick: IHandler = handleQueryClick as IHandler

    return {
      contentTableConfig,
      searchFormConfig,
      // formData,
      // propList,
      // showIndexColumn,
      // showSelectColumn,
      // handleSelectionChange,
      // title,
      /*  */
      pageContentRef,
      resetBtnClick,
      queryBtnClick
    }
  }
})
</script>
<style scoped lang="less">
.user {
  .content {
    padding: 10px 20px;
    border-top: 20px solid #eee;
  }
}
</style>

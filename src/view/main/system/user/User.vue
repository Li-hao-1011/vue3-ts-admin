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
      <user-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @new-btn-click="handelNewData"
        @edit-btn-click="handelEditData"
      >
      </user-content>
    </div>

    <PageModal ref="pageModalRef" :modalConfig="modalConfig" :defaultInfo="defaultInfo"></PageModal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { useStore } from 'vuex'

import UserSearch from '@/components/page-search'
import UserContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

// import { IFormItem } from '@/base-ui/LhFrom'
// import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
// import { usePageModal } from '@/hooks/usePageModal'
// import PageConetnt from '@/components/page-content'

type IHandler = () => void

export default defineComponent({
  name: 'SystemUsre',
  components: { UserSearch, UserContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const resetBtnClick: IHandler = handleResetClick as IHandler
    const queryBtnClick: IHandler = handleQueryClick as IHandler

    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})
    const handelEditData = (item: any) => {
      /** */
      pageModalRef.value && (pageModalRef.value.dialogVisible = true)
      defaultInfo.value = { ...item }

      console.log(defaultInfo.value, item)
    }
    const handelNewData = () => {
      /** */

      pageModalRef.value && (pageModalRef.value.dialogVisible = true)
    }

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
      queryBtnClick,

      modalConfig,
      handelEditData,
      handelNewData,
      pageModalRef,
      defaultInfo
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

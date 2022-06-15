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
        @new-btn-click="handleNewData"
        @edit-btn-click="handleEditData"
      >
      </user-content>
    </div>

    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="modalInfo"
      pageName="users"
    ></PageModal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
// import { useStore } from 'vuex'

import UserSearch from '@/components/page-search'
import UserContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

// import { IFormItem } from '@/base-ui/LhFrom'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
// import PageConetnt from '@/components/page-content'

import { useStore } from '@/store'

type IHandler = () => void

export default defineComponent({
  name: 'SystemUsre',
  components: { UserSearch, UserContent, PageModal },
  setup() {
    const store = useStore()

    // 当 entireDepartments entireRoles改变时重新获取 options
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems?.find((item) => item.field === 'departmentId')
      departmentItem!.options = store.state.entireDepartments.map((item) => ({
        label: item.name,
        value: item.id
      }))

      const rolesItem = modalConfig.formItems?.find((item) => item.field === 'roleId')
      rolesItem!.options = store.state.entireRoles.map((item) => ({
        label: item.name,
        value: item.id
      }))
      return modalConfig
    })

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const resetBtnClick: IHandler = handleResetClick as IHandler
    const queryBtnClick: IHandler = handleQueryClick as IHandler

    // 新增、编辑
    // callBack处理输入框是否显示
    const newCallBack = () => {
      modalConfig.title = '新建用户'
      const passwordItem = modalConfig.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      modalConfig.title = '编辑用户'

      const passwordItem = modalConfig.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }
    const [modalInfo, pageModalRef, handleNewDataFn, handleEditDataFn] = usePageModal(
      newCallBack,
      editCallback
    )
    const handleEditData: IHandler = handleEditDataFn as IHandler
    const handleNewData: IHandler = handleNewDataFn as IHandler

    return {
      contentTableConfig,
      searchFormConfig,

      /*  */
      pageContentRef,
      resetBtnClick,
      queryBtnClick,

      modalConfigRef,
      handleEditData,
      handleNewData,
      pageModalRef,
      modalInfo
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

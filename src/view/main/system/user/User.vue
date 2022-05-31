<template>
  <div class="user">
    <div class="search">
      <user-search
        :search-config="searchFormConfig"
        :searchBtnClick="handleQueryClick"
        :resetBtnClick="handleResetClick"
      ></user-search>
    </div>
    <div class="content">
      <user-content
        :content-table-config="contentTableConfig"
        ref="pageContentRef"
        pageName="users"
      >
      </user-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import UserSearch from '@/components/page-search'
import UserContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { IFormItem } from '@/base-ui/LhFrom'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'SystemUsre',
  components: { UserSearch, UserContent },
  setup() {
    /*     const formData = ref({
      name: '',
      password: '',
      sport: '',
      createDate: ''
    }) */

    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()
    const store = useStore()
    const modalConfigRef = computed(() => {
      const roleOption: IFormItem | undefined = modalConfig.formItems?.find(
        (item) => item.field === 'roleId'
      )
      roleOption!.options = store.state.entireRoles.map((item: any) => {
        return { label: item.name, value: item.id }
      })
      const departmentOption: IFormItem | undefined = modalConfig.formItems?.find(
        (item) => item.field === 'departmentId'
      )
      departmentOption!.options = store.state.entireDepartments.map((item: any) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    // modal handle
    const newHandleCallback = () => {
      const passwordItem = modalConfigRef.value.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editHandleCallback = () => {
      const passwordItem = modalConfigRef.value.formItems?.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }

    // 处理的hook
    const [modalInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(
      newHandleCallback,
      editHandleCallback
    )

    return {
      contentTableConfig,
      searchFormConfig,
      // formData,
      // propList,
      // showIndexColumn,
      // showSelectColumn,
      // handleSelectionChange,
      // title,
      pageContentRef,
      handleQueryClick,
      handleResetClick
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

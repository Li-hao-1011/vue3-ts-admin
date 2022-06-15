<template>
  <div class="role">
    <div class="search">
      <role-search :search-config="searchFormConfig"></role-search>
    </div>
    <div class="content">
      <role-content
        :content-table-config="contentTableConfig"
        page-name="role"
        @new-btn-click="handleNewData"
        @edit-btn-click="handleEditData"
      >
      </role-content>
    </div>

    <role-modal
      :modal-config="modalConfig"
      :defaultInfo="modalInfo"
      page-name="role"
      ref="pageModalRef"
      :other-info="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="menuTreeRef"
          :data="menuOptions"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          @check="handleCheckClick"
        />
      </div>
    </role-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'

import RoleSearch from '@/components/page-search'
import RoleContent from '@/components/page-content'
import RoleModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
import { getMenuLeafKeys } from '@/utils/mapMenus'

type IHandler = () => void

export default defineComponent({
  name: 'SystemRole',
  components: { RoleContent, RoleSearch, RoleModal },

  setup() {
    const menuTreeRef = ref<InstanceType<typeof ElTree>>()
    const store = useStore()
    const otherInfo = ref({})
    const handleCheckClick = (data1: any, data2: any) => {
      //
      const { checkedKeys, halfCheckedKeys } = data2
      const checketMenus = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList: checketMenus }
    }

    // 新增、编辑
    // callBack处理输入框是否显示
    const newCallBack = () => {
      modalConfig.title = '新建角色'
    }
    const editCallback = (data: any) => {
      modalConfig.title = '编辑角色'
      console.log(data.menuList)
      console.log(getMenuLeafKeys(data.menuList))

      nextTick(() => {
        menuTreeRef.value?.setCheckedKeys(getMenuLeafKeys(data.menuList), false)
      })
    }
    const [modalInfo, pageModalRef, handleNewDataFn, handleEditDataFn] = usePageModal(
      newCallBack,
      editCallback
    )
    const handleEditData: IHandler = handleEditDataFn as IHandler
    const handleNewData: IHandler = handleNewDataFn as IHandler

    const defaultProps = {
      children: 'children',
      label: 'name'
    }

    const menuOptions = computed(() => store.state.entireMenus)

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,

      modalInfo,
      pageModalRef,
      handleNewData,
      handleEditData,

      defaultProps,
      menuOptions,
      otherInfo,
      handleCheckClick,
      menuTreeRef
    }
  }
})
</script>
<style scoped lang="less">
.role {
  .content {
    border-top: 20px solid #eee;
  }
}
.menu-tree {
  margin-left: 20px;
}
</style>

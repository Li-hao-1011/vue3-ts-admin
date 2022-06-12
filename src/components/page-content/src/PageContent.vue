<template>
  <div class="page-content">
    <LhTable
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      :prop-list="contentTableConfig.propList"
      v-model:page="pageInfo"
    >
      <!-- v-model:page="pageInfo" -->
      <!--
        <LhTable
          :listData="dataList"
          :prop-list="contentTableConfig.propList"
          :title="contentTableConfig.title"
          :show-index-column="contentTableConfig.showIndexColumn"
          :show-select-column="contentTableConfig.showSelectColumn"
        >
     -->
      <!--
        v-bind="contentTableConfig"
      @selectionChange="contentTableConfig.handleSelectionChange"

     -->
      <!-- <LhTable :list-data="list" v-bind="contentTableConfig"> -->

      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" @click="handleNewClick">
          {{ contentTableConfig?.creatBtn ?? '新建' }}
        </el-button>
      </template>

      <template #enable="scope">
        <el-button plain :type="scope.row.enable ? 'success' : 'danger'" size="mini">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button v-if="isUpdate" size="small" text @click="handleEditClick(scope.row)"
            >编辑
          </el-button>
          <el-button
            v-if="isDelete"
            size="small"
            text
            type="danger"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </LhTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

import LhTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'

export default defineComponent({
  name: 'PageContent',
  components: { LhTable },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 按钮是否显示
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    // 0.绑定pageInfo
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })
    watch(pageInfo, () => getPageData())

    // let otherQueryInfo = {}

    // 2.获取数据
    const getPageData = (otherInfo: any = {}) => {
      delete otherInfo.undefined
      if (!isQuery) return
      store.dispatch('system/getPageListDataAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...otherInfo
        }
      })
    }
    getPageData()

    // 从vuex中获取数据
    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
    const dataCount = computed(() => store.getters[`system/pageCountData`](props.pageName))

    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 删除操作
    const handleDeleteClick = (item: any) => {
      //
      console.log('删除', item)

      store.dispatch('system/deletePageDataAction', { id: item.id, pageName: props.pageName })
    }

    const handleEditClick = (item: any) => {
      //
      emit('editBtnClick', item)
      console.log(item)
    }
    const handleNewClick = () => {
      //
      emit('newBtnClick')
    }

    return {
      dataList,
      dataCount,
      getPageData,
      otherPropSlots,
      pageInfo,
      isCreate,
      isDelete,
      isUpdate,
      isQuery,
      handleDeleteClick,
      handleEditClick,
      handleNewClick
    }
  }
})
</script>
<style scoped lang="less">
.page-content {
  .handle-btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>

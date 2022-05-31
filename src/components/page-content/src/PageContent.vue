<template>
  <div class="page-content">
    <LhTable
      :list-data="list"
      :prop-list="contentTableConfig.propList"
      :title="contentTableConfig.title"
      :show-index-column="contentTableConfig.showIndexColumn"
      :show-select-column="contentTableConfig.showSelectColumn"
    >
      <!--
        v-bind="contentTableConfig"
      @selectionChange="contentTableConfig.handleSelectionChange"

     -->
      <!-- 作用域插槽 -->
      <template #enable="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'" size="small">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <!-- <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template> -->
      <!-- <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template> -->
      <template #handle>
        <div class="handle-btns">
          <!--  <el-button size="small" type="plain" link>编辑</el-button>
            <el-button size="small" type="danger" link>删除</el-button> -->
          <el-button size="small" text>编辑</el-button>
          <el-button size="small" text type="danger">删除</el-button>
        </div>
      </template>

      <template #headerHandler>
        <el-button type="primary"> 新建用户 </el-button>
      </template>
      <template #footer>
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
        <!--
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :disabled="disabled"
            :background="background"
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :small="small"
           -->
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
  setup(props) {
    // 7.按钮是否显示
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    const store = useStore()
    // 0.绑定pageInfo
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })
    watch(pageInfo, () => getPageData())

    let otherQueryInfo = {}

    // 2.获取数据
    const getPageData = (otherInfo: any = {}) => {
      if (!isQuery) return
      otherQueryInfo = otherInfo
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

    // 请求
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 100
      }
    })

    let list = computed(() => store.getters[`system/pageListData`](props.pageName))
    let count = ref(0)
    /*     switch (props.pageName) {
      case 'user':
        list = computed(() => store.getters[`system/pageListData`])
        // count = computed(() => store.state.system.userCount)
        break
      case 'role':
        list = computed(() => store.state.system.roleList)
        // count = computed(() => store.state.system.roleCount)
        break
    } */

    return { list, count, getPageData }
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

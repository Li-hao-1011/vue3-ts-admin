<template>
  <div class="user">
    <div class="search">
      <user-search :search-config="formConfig"></user-search>

      <!--
        <lh-form v-bind="formConfig" v-model="formData">
              <template v-slot:header>
          <h1>高级检索</h1>
        </template>

        <template v-slot:footer>
          <div class="user-footer">
            <el-button>
              <template #icon>
                <el-icon><RefreshLeft /></el-icon>
              </template>
              重置
            </el-button>
            <el-button type="primary">
              <template #icon>
                <el-icon><Search /></el-icon>
              </template>
              搜索
            </el-button>
          </div>
        </template>
      </lh-form> -->
    </div>
    <div class="content">
      <LhTable
        :list-data="userList"
        :prop-list="propList"
        title="用户列表"
        :show-index-column="showIndexColumn"
        :show-select-column="showSelectColumn"
        @selectionChange="handleSelectionChange"
      >
        <!-- 作用域插槽 -->
        <template #enable="scope">
          <el-button :type="scope.row.enable ? 'success' : 'danger'" size="small">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          {{ $filters.formatTime(scope.row.createAt) }}
        </template>
        <template #updateAt="scope">
          {{ $filters.formatTime(scope.row.updateAt) }}
        </template>
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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

import UserSearch from '@/components/page-search'
import LhTable from '@/base-ui/table'
import { formConfig } from './config/search.config'
import { IPropList } from './config/search.config'

export default defineComponent({
  name: 'SystemUsre',
  components: { UserSearch, LhTable },
  setup() {
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createDate: ''
    })

    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 100
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList: IPropList[] = [
      { prop: 'name', label: '用户名', minWiath: '100', slotName: 'name' },
      { prop: 'realname', label: '真实姓名', minWiath: '100', slotName: 'realname' },
      { prop: 'enable', label: '状态', minWiath: '100', slotName: 'enable' },
      { prop: 'cellphone', label: '手机号码', minWiath: '200', slotName: 'cellphone' },
      { prop: 'createAt', label: '创建时间', minWiath: '200', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWiath: '200', slotName: 'updateAt' },
      { label: '操作', minWiath: '120', slotName: 'handle' }
    ]

    const showIndexColumn = true
    const showSelectColumn = true
    const handleSelectionChange = () => {
      //
    }

    return {
      formConfig,
      formData,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      handleSelectionChange
    }
  }
})
</script>
<style scoped lang="less">
.user {
  border-top: 20px solid #eee;
  .content {
    padding: 10px 20px;
  }
  .handle-btns {
    width: 100%;
    // display: flex;
    // justify-content: space-between;
  }
}
</style>

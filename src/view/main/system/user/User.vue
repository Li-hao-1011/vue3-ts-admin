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
      <LhTable :list-data="userList" :prop-list="propList">
        <!-- 作用域插槽 -->
        <template #enable="scope">
          <el-button type="danger">{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt="scope">
          <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
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

    const propList = [
      { prop: 'name', label: '用户名', minWiath: '100', slotName: 'name' },
      { prop: 'realname', label: '真实姓名', minWiath: '100', slotName: 'realname' },
      { prop: 'enable', label: '状态', minWiath: '100', slotName: 'enable' },
      { prop: 'cellphone', label: '手机号码', minWiath: '200', slotName: 'cellphone' },
      { prop: 'createAt', label: '创建时间', minWiath: '200', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWiath: '200', slotName: 'updateAt' }
    ]

    return { formConfig, formData, userList, userCount, propList }
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

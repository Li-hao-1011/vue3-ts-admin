<template>
  <div>
    <lh-form v-bind="searchConfig" v-model="formData">
      <template v-slot:header>
        <h1>高级检索</h1>
      </template>

      <template v-slot:footer>
        <div class="page-search-footer">
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
    </lh-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Search, RefreshLeft } from '@element-plus/icons-vue'

import LhForm from '@/base-ui/LhFrom'

export default defineComponent({
  name: 'PageSearch',
  components: { LhForm, Search, RefreshLeft },
  props: {
    searchConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createDate: ''
    })
    return { formData }
  }
})
</script>
<style scoped lang="less">
.page-search-footer {
  text-align: right;
  padding: 0 0 10px 0;
}
</style>

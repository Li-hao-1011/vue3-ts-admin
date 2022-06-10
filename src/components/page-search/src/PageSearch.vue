<template>
  <div>
    <lh-form v-bind="searchConfig" v-model="formData">
      <template v-slot:footer>
        <div class="page-search-footer">
          <el-button @click="handleResetClick">
            <template #icon>
              <el-icon><RefreshLeft /></el-icon>
            </template>
            重置
          </el-button>
          <el-button type="primary" @click="handleSearchClick">
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

interface IFormData {
  [key: string]: any
}

export default defineComponent({
  name: 'PageSearch',
  components: { LhForm, Search, RefreshLeft },
  props: {
    searchConfig: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: '高级检索'
    }
  },
  emits: ['searchBtnClick', 'resetBtnClick'],
  setup(props, { emit }) {
    // array
    const originFormData: IFormData = {}

    const formItems = props.searchConfig?.formItems ?? []
    for (const item of formItems) {
      originFormData[item.filed] = ''
    }

    const formData = ref<IFormData>({ ...originFormData })

    // 重置
    const handleResetClick = () => {
      console.log('重置')

      /*   for (const key in originFormData) {
        formData.value[`${key}`] = originFormData[key]
      } */
      // emit('resetBtnClick')
      formData.value = originFormData
    }

    // 查找
    const handleSearchClick = () => {
      console.log({ ...formData.value })
      emit('searchBtnClick', formData.value)
    }

    return { formData, handleResetClick, handleSearchClick }
  }
})
</script>
<style scoped lang="less">
.page-search-footer {
  text-align: right;
  padding: 0 0 10px 0;
}
</style>

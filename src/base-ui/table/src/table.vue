<template>
  <div>
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column
          :prop="propItem.prop"
          :label="propItem.label"
          :min-width="propItem.minWiath"
        >
          <!-- 作用域插槽 -->
          <template v-slot="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              <!-- 默认值 -->
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPropList } from '../type/types'
export default defineComponent({
  name: 'LhTable',
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<IPropList[]>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped lang="less"></style>

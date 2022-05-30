<template>
  <div class="lh-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <div class="content">
      <el-table
        :data="listData"
        :border="showTableBorder"
        @selection-change="handleSelectionChange"
        style="width: 100%"
      >
        <el-table-column v-if="showIndexColumn" type="index" align="center"> </el-table-column>

        <el-table-column v-if="showSelectColumn" type="selection" align="center"> </el-table-column>
        <template v-for="propItem in propList" :key="propItem.prop">
          <el-table-column
            :prop="propItem.prop"
            :label="propItem.label"
            :min-width="propItem.minWiath"
            align="center"
          >
            <!-- 作用域插槽 -->
            <template v-slot="scope">
              <slot :name="propItem.slotName" :row="scope.row">
                <!-- 默认值 -->
                {{ propItem.prop !== undefined ? scope.row[propItem.prop] : '' }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>

    <div class="footer">
      <slot name="footer">123465</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPropList } from '../type/types'
export default defineComponent({
  name: 'LhTable',
  props: {
    title: {
      type: String,
      default: '表格列表'
    },
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<IPropList[]>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: true
    },
    showTableBorder: {
      type: Boolean,
      default: true
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      //
      emit('selectionChange', value)
    }
    return { handleSelectionChange }
  }
})
</script>
<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  text-align: right;
  display: flex;
  justify-content: right;
}
</style>

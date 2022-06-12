<template>
  <div class="lh-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              class="form-item"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :model-value="modelValue[`${item.field}`]"
                  :placeholder="item.placeHolder"
                  :show-password="item.type === 'password'"
                  @update:modelValue="handleValueChange($event, item.field)"
                  v-bind="item.otherOption"
                  style="width: 100%"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[`${item.field}`]"
                  :placeholder="item.placeHolder"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.field)"
                  v-bind="item.otherOption"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.label }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :model-value="modelValue[`${item.field}`]"
                  v-bind="item.otherOption"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  name: 'LhForm',
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    modelValue: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newVal) => {
        emit('update:modelValue', newVal)
      },
      {
        deep: true
      }
    )
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    // console.log(123, props.modelValue)

    /*    const handleUpdataValue = (value: any, key: string) => {

      console.log(value, key)

      emit('update:modelValue', { ...props.modelValue, [key]: value })
    } */
    return {
      formData,
      handleValueChange
    }
  }
})
</script>
<style scoped lang="less"></style>

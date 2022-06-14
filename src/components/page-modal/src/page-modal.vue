<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      :title="modalConfig.title"
      width="30%"
      center
      destroy-on-close
    >
      <LhForm v-model="formData" v-bind="modalConfig"></LhForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import LhForm from '@/base-ui/LhFrom'
import { userStore } from '@/store'

export default defineComponent({
  components: {
    LhForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const store = userStore()

    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )

    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return { dialogVisible, formData, handleConfirmClick }
  }
})
</script>

<style scoped></style>

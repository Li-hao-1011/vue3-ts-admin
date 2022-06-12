<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <LhForm v-model="formData" v-bind="modalConfig"></LhForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import LhForm from '@/base-ui/LhFrom'
import { forIn } from 'lodash'

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
    }
    /*
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    } */
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal) => {
        console.log(newVal)

        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )

    return { dialogVisible, formData }
  }
})
</script>

<style scoped></style>

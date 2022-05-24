<template>
  <div>
    <el-form :model="phone" ref="ruleFormRef" label-width="65px" class="demo-ruleForm">
      <el-form-item label="账 号:">
        <el-input v-model="phone.mobilePhoneNumber" />
      </el-form-item>
      <el-form-item label="密 码:">
        <el-input v-model="phone.verificationCode" />
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      mobilePhoneNumber: '',
      verificationCode: ''
    })
    return { phone }
  }
})
</script>

<style scoped></style>

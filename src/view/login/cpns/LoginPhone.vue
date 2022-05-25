<template>
  <div class="login-phone">
    <el-form :model="phone" :rules="phoneRules" ref="ruleFormRef" label-width="75px">
      <el-form-item label="手机号:" prop="phone">
        <el-input v-model="phone.mobilePhoneNumber" />
      </el-form-item>
      <el-form-item label="验证码:" prop="verificationCode">
        <div class="verification-code">
          <el-input v-model="phone.verificationCode" style="width: 100px" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { PHONE_RULES as phoneRules } from '../config/phone-config'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      mobilePhoneNumber: '',
      verificationCode: ''
    })
    return { phone, phoneRules }
  }
})
</script>

<style scoped lang="less">
.login-phone {
  .verification-code {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
}
</style>

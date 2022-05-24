<template>
  <div>
    <el-form
      :model="account"
      :rules="rules"
      ref="ruleFormRef"
      label-width="75px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密 码:" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  name: 'LoginAccount',

  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const rules: FormRules = {
      name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5-10位',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '密码必须是大于3位',
          trigger: 'blur'
        }
      ]
    }
    return { account, rules }
  }
})
</script>

<style scoped></style>

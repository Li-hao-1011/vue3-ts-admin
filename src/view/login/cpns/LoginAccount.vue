<template>
  <div>
    <el-form
      :model="account"
      :rules="accountRules"
      ref="formRef"
      label-width="75px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密 码:" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ACCOUNT_RULES as accountRules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
  name: 'LoginAccount',

  setup() {
    const storageName = 'name'
    const storageValue = 'password'
    const storageType = 'localStorage'
    const store = useStore()

    const account = reactive({
      name: localCache.getCache(storageName, storageType) ?? '',
      password: localCache.getCache(storageValue, storageType) ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (!valid) {
          return
        }
        // 是否记住密码
        if (isKeepPassword) {
          // 本地缓存       、
          localCache.setCache(storageName, account.name, storageType)
          localCache.setCache(storageValue, account.password, storageType)
        } else {
          localCache.deleteCache(storageName, storageType)
          localCache.deleteCache(storageValue, storageType)
        }

        // 登录密码
        store.dispatch('login/accountLoginAction', account)
      })
    }

    return { account, formRef, accountRules, loginAction }
  }
})
</script>

<style scoped></style>

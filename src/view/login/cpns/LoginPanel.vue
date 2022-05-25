<template>
  <div class="login-panel">
    <h1 class="panel-title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" stretch class="panel-tabs">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="panel-contral">
      <el-checkbox v-model="isKeepPassword" label="记住密码" size="large" />
      <el-link>忘记密码</el-link>
    </div>
    <div class="panel-login">
      <el-button type="primary" @click="handleLoginClick" style="width: 100%">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginPhone from './LoginPhone.vue'
import LoginAccount from './LoginAccount.vue'

/*
  import LoginPhone from './LoginPhone.vue'中得到的是 【组件的描述】,它是一个类

  使用 <LoginPhone />, 是得到类创建的一个实例

 */

export default defineComponent({
  name: 'LoginPanel',
  components: { Avatar, Iphone, LoginPhone, LoginAccount },
  setup() {
    const currentTab = ref<string>('account')

    const isKeepPassword = ref<boolean>(false)
    // 获取组件实例
    // 组件实例的类型 <InstanceType<typeof LoginAccount>>
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        // 账号登录
        accountRef.value?.loginAction(isKeepPassword.value)
      } else if (currentTab.value === 'phone') {
        // 手机登录
        console.log('手机登录')
      }
    }

    const phoneRef = ref(null)

    return {
      isKeepPassword,
      handleLoginClick,
      phoneRef,
      accountRef,
      currentTab
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .panel-title {
    text-align: center;
  }
  .panel-tabs {
    .custom-tabs-label {
      span {
        vertical-align: middle;
        margin-left: 4px;
      }
      .el-icon {
        vertical-align: middle;
      }
    }
  }
  .panel-contral {
    display: flex;
    justify-content: space-between;
  }
  .panel-login {
    width: 100%;
  }
}
</style>

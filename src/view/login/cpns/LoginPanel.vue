<template>
  <div class="login-panel">
    <h1 class="panel-title">后台管理系统</h1>
    <el-tabs type="border-card" stretch class="panel-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginPhone from './LoginPhone.vue'
import LoginAccount from './LoginAccount.vue'

export default defineComponent({
  name: 'LoginPanel',
  components: { Avatar, Iphone, LoginPhone, LoginAccount },
  setup() {
    return {}
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
}

/* .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
} */
</style>

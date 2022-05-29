<template>
  <el-dropdown class="user-info">
    <span class="info-row">
      <!-- <el-avatar /> -->
      <el-icon><UserFilled /></el-icon>
      {{ name }}
      <el-icon>
        <ArrowDown />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon><CircleClose /></el-icon>
          退出登录
        </el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ArrowDown, UserFilled, CircleClose } from '@element-plus/icons-vue'
import { userStore } from '@/store'

export default defineComponent({
  name: 'UserInfo',
  components: { ArrowDown, UserFilled, CircleClose },
  setup() {
    const store = userStore()
    const name = 'coderwhy'
    const userInfo = computed(() => store.state.login.userInfo)
    // const name = userInfo.value?.name ?? 'coderwhy'
    console.log(userInfo.value)

    return { name }
  }
})
</script>
<style scoped lang="less">
.user-info {
  .info-row {
    display: flex;
    align-items: cnenter;
  }
}
</style>

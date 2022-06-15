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
        <el-dropdown-item @click="handleLogout">
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
import { useStore } from '@/store'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'UserInfo',
  components: { ArrowDown, UserFilled, CircleClose },
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)
    const handleLogout = () => {
      //
      localCache.deleteCache('token', 'localStorage')
      router.push('/main')
    }
    return { name, handleLogout }
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

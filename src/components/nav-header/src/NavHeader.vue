<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-icon">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <lh-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>

    <!-- <el-icon><Expand /></el-icon> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import UserInfo from './UserInfo.vue'
import LhBreadcrumb from '@/base-ui/Breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/mapMenus'
import { userStore } from '@/store/index'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'NavHeader',
  components: { Fold, Expand, UserInfo, LhBreadcrumb },
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(true)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }

    // 面包屑数据
    const store = userStore()
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const userMenus = computed(() => store.state.login.userMenu).value
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    // console.log(breadcrumbs)

    return { handleFoldClick, isFold, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  .content {
    display: flex;
    width: calc(100% - 50px);
    height: 100%;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
  }

  .fold-icon {
    width: 50px;
    font-size: 25px;
    cursor: pointer;
  }
}
</style>

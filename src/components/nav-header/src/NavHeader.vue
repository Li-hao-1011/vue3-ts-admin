<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-icon">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div class="bread-crumb">
        <span>面包屑</span>
        <span>/</span>
        <span>123</span>
      </div>
      <user-info class="user-info"></user-info>
    </div>

    <!-- <el-icon><Expand /></el-icon> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import UserInfo from './UserInfo.vue'

export default defineComponent({
  name: 'NavHeader',
  components: { Fold, Expand, UserInfo },
  emits: ['foldchange'],
  setup(props, { emit }) {
    const isFold = ref(true)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldchange', isFold.value)
    }
    return { handleFoldClick, isFold }
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
    .bread-crumb {
      // height: 100%;
    }
    .user-info {
    }
  }

  .fold-icon {
    width: 50px;
    font-size: 25px;
    cursor: pointer;
  }
}
</style>

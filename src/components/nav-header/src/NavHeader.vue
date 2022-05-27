<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-icon">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <!-- <el-icon><Expand /></el-icon> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'NavHeader',
  components: { Fold, Expand },
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
  .fold-icon {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>

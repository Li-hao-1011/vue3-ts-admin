<template>
  <div id="app">
    <el-config-provider :locale="zhCN">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCN from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: { ElConfigProvider },
  setup() {
    return { zhCN }
  }
})
</script>

<style lang="less"></style>

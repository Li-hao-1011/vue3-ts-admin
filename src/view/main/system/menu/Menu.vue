<template>
  <PageContent :contentTableConfig="contentTableConfig" pageName="menu"></PageContent>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'SystemMenu',
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>
<style scoped lang="less"></style>

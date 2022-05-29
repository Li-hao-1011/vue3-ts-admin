<template>
  <div class="user">
    <div class="search">
      <lh-form v-bind="formConfig" v-model="formData" />

      <!--   <el-form label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="密码">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="喜欢的运动">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import LhForm from '@/base-ui/LhFrom'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'SystemUsre',
  components: { LhForm },
  setup() {
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createDate: ''
    })
    return { formConfig, formData }
  }
})
</script>
<style scoped lang="less"></style>

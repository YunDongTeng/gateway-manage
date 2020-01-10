<template>
  <div id="app">

    <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
      <el-step title="接口基本信息" />
      <el-step title="后端服务信息" />
      <el-step title="接口响应配置" />
    </el-steps>

    <el-card class="box-card" style="margin: 10px;">
      <api-info v-show="active === 1" />
      <api-server v-show="active === 2" />
      <api-response v-show="active ===3" />
    </el-card>
    <el-row>
      <el-col>
        <div style="width: 100%; text-align: center">
          <el-button type="primary" v-if="active > 1" @click="preStep">上一步</el-button>
          <el-button type="primary" v-if="active < 3" @click="nextStep">下一步</el-button>
          <el-button type="primary" v-if="active === 3" @click="finish">完成</el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import ApiInfo from './componments/ApiInfo'
import ApiServer from './componments/ApiServer'
import ApiResponse from './componments/ApiResponse'

export default {
  components: { ApiInfo, ApiServer, ApiResponse },
  data() {
    return {
      active: 1
    }
  },
  methods: {
    preStep: function() {
      this.active--
    },
    nextStep: function() {
      this.active++
    },
    finish: function() {
      this.$router.push('/api/apiInfo/')
    }
  }
}
</script>
<style>
  .footer-button {
    text-align: center;
  }
</style>

<template>
  <div id="app">
    <el-form :model="responseForm" label-width="100px">
      <el-row>
        <el-col :span="20">
          <el-form-item label="成功示例" prop="successDemo">
            <el-input v-model="responseForm.successDemo" type="textarea" style="width: 100%; " />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="20">
          <el-form-item label="失败示例" prop="failDemo">
            <el-input v-model="responseForm.failDemo" type="textarea" style="width: 100%; " />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ApiResponse',
  data() {
    return {
      responseForm: {
        successDemo: '',
        failDemo: ''
      }
    }
  }
}
</script>

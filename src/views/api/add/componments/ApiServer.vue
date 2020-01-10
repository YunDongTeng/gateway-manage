<template>
  <div id="app">
    <el-form :model="serverDataForm" label-width="100px">
      <el-row>
        <el-col :span="10">
          <el-form-item label="后端服务地址" prop="remoteUrl">
            <el-input v-model="serverDataForm.remoteUrl" type="text" />
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item label="请求uri" prop="uri">
            <el-input v-model="serverDataForm.uri" type="text" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="请求方法" prop="method">
            <el-select v-model="serverDataForm.method" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in methodArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item label="请求协议" prop="schema">
            <el-select v-model="serverDataForm.schema" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in schemaArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="请求类型" prop="contentType">
            <el-select v-model="serverDataForm.contentType" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in contentTypeArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item label="超时时间" prop="timeout">
            <el-input v-model="serverDataForm.timeout" type="text" />
          </el-form-item>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="20">
          <el-form-item label="备注" prop="remark">
            <el-input v-model="serverDataForm.remark" type="textarea" style="width: 100%; " />
          </el-form-item>
        </el-col>

      </el-row>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ApiServer',
  data() {
    return {
      serverDataForm: {
        remoteUrl: '',
        uri: '',
        method: '',
        schema: '',
        timeout: '',
        contentType: ''
      },
      methodArray: [
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
        { label: 'PUT', value: 'PUT' },
        { label: 'DELETE', value: 'DELETE' }
      ],
      schemaArray: [
        { label: 'HTTP', value: 'HTTP' },
        { label: 'HTTPS', value: 'HTTPS' }
      ],
      contentTypeArray: [
        { label: 'application/json', value: 'application/json' },
        { label: 'form/data', value: 'form/data' }
      ]
    }
  }
}
</script>

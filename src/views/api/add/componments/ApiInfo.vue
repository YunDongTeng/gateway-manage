<template>
  <div id="app">
    <el-form :model="apiDataForm" :rules="rules" label-width="100px">
      <el-row>
        <el-col :span="10">
          <el-form-item label="接口名称" prop="name">
            <el-input v-model="apiDataForm.name" type="text" />
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item label="请求uri" prop="uri">
            <el-input v-model="apiDataForm.uri" type="text" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="请求方法" prop="method">
            <el-select v-model="apiDataForm.method" placeholder="请选择" style="width: 100%">
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
            <el-select v-model="apiDataForm.schema" placeholder="请选择" style="width: 100%">
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
            <el-select v-model="apiDataForm.contentType" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in contentTypeArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="20">
          <el-form-item label="备注" prop="remark">
            <el-input v-model="apiDataForm.remark" type="textarea" style="width: 100%; " />
          </el-form-item>
        </el-col>

      </el-row>

    </el-form>

    <el-button
      class="filter-item"
      type="primary"
      style="margin-bottom: 10px"
      icon="el-icon-plus"
      @click="handleAddParam"
    >
      添加
    </el-button>
    <el-table
      :data="apiDataForm.paramArray"
      border
      style="width: 100%"
      highlight-current-row
    >

      <template>
        <el-table-column
          prop="paramName"
          label="参数名称"
          width="140"
        >
          <el-input type="text" />
        </el-table-column>
      </template>

      <el-table-column
        prop="position"
        label="参数位置"
        width="120"
      >
        <el-select placeholder="请选择">
          <el-option
            v-for="item in apiParamPositionArray"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-table-column>

      <el-table-column
        prop="type"
        label="参数类型"
        width="150">
        <el-select placeholder="请选择">
          <el-option
            v-for="item in apiParamTypeArray"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-table-column>

      <el-table-column
        prop="must"
        label="是否必填"
        width="90">
        <el-switch
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-table-column>

      <el-table-column
        prop="defaultValue"
        label="默认值"
      />

      <el-table-column
        prop="demoValue"
        label="示例"
      />

      <el-table-column
        prop="remark"
        label="参数描述"
      />

      <el-table-column>
        <div style="width: 100%; text-align: center"><i class="el-icon-delete" @click="removeParam" /></div>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>

var param = {
  paramName: ''
}

export default {
  name: 'ApiInfo',
  data() {
    return {
      apiCheckForm: {
        name: '',
        uri: '',
        method: '',
        schema: '',
        contentType: ''
      },
      rules: {
        name: [
          { required: true, message: '接口名称不能为空', trigger: 'blur' }
        ],
        uri: [
          { required: true, message: '请求uri不能为空', trigger: 'blur' }
        ],
        method: [
          { required: true, message: '请求方法不能为空', trigger: 'change' }
        ],
        schema: [
          { required: true, message: '请求协议不能为空', trigger: 'change' }
        ],
        contentType: [
          { required: true, message: '请求类型不能为空', trigger: 'change' }
        ]
      },
      apiDataForm: {
        name: '',
        uri: '',
        method: '',
        schema: '',
        contentType: '',
        remark: '',
        paramArray: [Object.assign({}, param)]
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
      ],
      apiParamPositionArray: [
        { label: '查询参数', value: 'PARAM' },
        { label: '请求头参数', value: 'HEADER' }
      ],
      apiParamTypeArray: [
        { label: '字符串', value: 'STRING' },
        { label: '日期', value: 'DATE' },
        { label: '整数', value: 'INTEGER' },
        { label: '浮点型', value: 'DOUBLE' },
        { label: '布尔类型', value: 'BOOLEAN' }
      ]
    }
  },
  methods: {
    handleAddParam: function() {

    },
    removeParam: function(e) {
      console.log(e)
    }
  }
}
</script>

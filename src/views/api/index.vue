<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="condition.name" placeholder="网关名称" style="width: 260px;" class="filter-item" />
      <el-input
        v-model="condition.uri"
        placeholder="网关uri"
        style="width: 280px; margin-left: 10px;"
        class="filter-item"
      />
      <el-select
        v-model="condition.status"
        placeholder="请选择"
        style="width: 120px; margin-left: 10px;"
        class="filter-item"
      >
        <el-option v-for="item in statusArray" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button
        class="filter-item"
        type="primary"
        style="margin-left: 10px"
        icon="el-icon-search"
        @click="handleQuery"
      >
        搜索
      </el-button>
      <el-button class="filter-item" type="primary" style="margin-left: 10px" icon="el-icon-plus" @click="handleAdd">
        添加
      </el-button>
    </div>

    <el-table v-loading="listLoading" stripe :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column width="160px" align="center" prop="name" label="网关名称">
        <template slot-scope="{row}">
          {{ row.name }}
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" prop="uri" label="uri">
        <template slot-scope="{row}">
          {{ row.uri }}
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" prop="method" label="请求方法">
        <template slot-scope="{row}">
          {{ row.method }}
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" prop="schema" label="协议">
        <template slot-scope="{row}">
          {{ row.schema }}
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" prop="contentType" label="请求类型">
        <template slot-scope="{row}">
          {{ row.contentType }}
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" prop="status" label="状态">
        <template slot-scope="{row}">
          <el-tag effect="dark" v-if="row.status === 'ONLINE'" type="success">
            启用
          </el-tag>
          <el-tag effect="dark" v-if="row.status === 'OFFLINE'" type="danger">
            禁用
          </el-tag>
        </template>

      </el-table-column>

      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini">
            编辑
          </el-button>
          <el-button size="mini" type="warning" v-if="row.status === 'ONLINE'">
            禁用
          </el-button>
          <el-button size="mini" type="success" v-if="row.status === 'OFFLINE'">
            启用
          </el-button>
          <el-button size="mini" type="danger">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page.sync="condition.pageNo"
        :page-size="condition.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

  </div>
</template>

<script>
import sysApi from '@/api/sys-api'
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves'

export default {
  name: 'Api',
  components: { sysApi, Pagination },
  directives: { waves },
  data() {
    return {
      name: 'Api管理',
      listLoading: true,
      condition: {
        name: '',
        uri: '',
        status: '',
        pageSize: 10,
        pageNo: 1
      },
      currentPage3: 1,
      statusArray: [
        { key: '', label: '全部' },
        { key: 'ONLINE', label: '已启用' },
        { key: 'OFFLINE', label: '已禁用' }
      ],
      list: [],
      total: 0
    }
  },
  created: function() {
    this.queryApiInfo()
  },
  methods: {
    queryApiInfo: function() {
      this.listLoading = true
      sysApi.queryApiByPage(JSON.stringify(this.condition)).then(result => {
        this.list = result.data.apiList
        this.total = result.data.count
        this.listLoading = false

        console.log(this.total)
      })
    },

    handleAdd: function() {
      this.$router.push('/api/addApi/')
    },
    handleQuery: function() {
      this.queryApiInfo()
    },
    handleSizeChange(val) {
      this.condition.pageSize = val
      this.queryApiInfo()
    },
    handleCurrentChange(val) {
      this.condition.pageNo = val
      this.queryApiInfo()
    }
  }
}
</script>


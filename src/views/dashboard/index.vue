<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import sysApi from '@/api/sys-api'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, sysApi },
  data() {
    return {
      currentRole: 'adminDashboard',
      condition: {
        name: '',
        uri: '',
        pageSize: 10,
        pageNo: 1
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    sysApi.queryApiByPage(JSON.stringify(this.condition)).then(result => {
      console.log(result)
    })

    /* if (!this.roles.includes('admin')) {
        this.currentRole = 'editorDashboard'
      }*/
  }
}
</script>

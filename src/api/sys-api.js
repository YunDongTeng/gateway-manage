import request from '@/utils/request'

const baseUri = '/api'

function queryApiByPage(param) {
  return request.post(baseUri + '/list', param)
}

export default {
  queryApiByPage
}

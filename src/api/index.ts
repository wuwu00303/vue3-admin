import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  timeout: 30000,
  withCredentials: true
})
//请求发起前
http.interceptors.request.use((config) => {
  config.headers!['token'] = 'xxx'
  return config
})
//请求响应后
http.interceptors.response.use((res) => {
  const { data } = res;
  if (data.success === false) {
    ElMessage.error(data.message || '服务器开了小差')
    return Promise.reject(new Error(data.message));
  }
  return data
})

export default http
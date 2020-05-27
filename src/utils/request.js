import axios from 'axios'
import { Toast } from 'vant'
import Vue from 'vue'

Vue.use(Toast)
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    Toast.fail(data.message)
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  Toast.loading('加载中')
  // const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  // if (token) {
  //   config.headers['Access-Token'] = token
  // }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  Toast.clear()
  return response.data
}, errorHandler)

export default request

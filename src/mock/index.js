// 判断环境不是 prod ，加载 mock 服务
// if (process.env.NODE_ENV !== 'production') {
// 使用同步加载依赖
// 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
console.log('[antd-pro] mock mounting')
const Mock = require('mockjs2')
require('./services/activity')
require('./services/service')
require('./services/home')
require('./services/auth')
require('./services/user')
require('./services/park')
Mock.setup({
  timeout: 800 // setter delay time
})
console.log('[antd-pro] mock mounted')
// }

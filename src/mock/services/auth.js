import { builder, getBody } from '../util'
import Mock from 'mockjs2'

const username = ['admin', 'super']
// 强硬要求 ant.design 相同密码
// '21232f297a57a5a743894a0e4a801fc3',
const password = ['8914de686ab28dc22f30d3d8e107ff6c', '21232f297a57a5a743894a0e4a801fc3'] // admin, ant.design

const login = (options) => {
  const body = getBody(options)
  console.log('mock: body', body)
  if (!username.includes(body.username) || !password.includes(body.password)) {
    return builder({ isLogin: true }, '账户或密码错误', 401)
  }

  return builder({
    id: Mock.mock('@guid'),
    name: Mock.mock('@name'),
    username: 'admin',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
    lang: 'zh-CN',
    token: '4291d7da9005377ec9aec4a71ea837f'
  }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

const logout = (options) => {
  const body = getBody(options)
  console.log('mock: body', body)
  return builder({}, '注销成功', 200)
}

Mock.mock(/\/api\/login/, login)
Mock.mock(/\/api\/logout/, logout)

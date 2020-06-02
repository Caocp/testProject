import Mock from 'mockjs2'
import { builder } from '../util'

const userInfo = () => {
  return builder({
    name: 'caocp',
    avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
    username: 'admin'
  })
}

Mock.mock(/\/api\/user\/info/, userInfo)

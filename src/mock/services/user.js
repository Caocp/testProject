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

const notificeList = [
  {
    objectid: 134,
    author: "system",
    title: "消息统一下发",
    content: "123123213于磊你收到没",
    createTime: "2020-10-16 14:09:00",
    accepter: "allMessageReceivUser",
    accepterName: null,
    readStatus: 1,
    notificationSend: null,
    skipLinkContent: "38",
  },
  {
    objectid: 135,
    author: "system33",
    title: "消息统一下发121",
    content: "123123213于磊你收到没",
    createTime: "2020-10-16 14:09:00",
    accepter: "allMessageReceivUser",
    accepterName: null,
    readStatus: 1,
    notificationSend: null,
    skipLinkContent: "38",
  },
  {
    objectid: 136,
    author: "system55",
    title: "消息统一下发232",
    content: "123123213于磊你收到没",
    createTime: "2020-10-16 14:09:00",
    accepter: "allMessageReceivUser",
    accepterName: null,
    readStatus: 1,
    notificationSend: null,
    skipLinkContent: "38",
  }
  
]

const notificeListData = () => {
  return builder(notificeList, '成功', 200)
}
Mock.mock(/\/api\/user\/notifice/, notificeListData)

import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

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
  ,
  {
    objectid: 137,
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
  ,
  {
    objectid: 12,
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
  ,
  {
    objectid: 13,
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
  ,
  {
    objectid: 54,
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
  ,
  {
    objectid: 65,
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
  ,
  {
    objectid: 98,
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
  ,
  {
    objectid: 34,
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
  ,
  {
    objectid: 45,
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
  ,
  {
    objectid: 345,
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

  ,
  {
    objectid: 766,
    author: "system55",
    title: "消息统一下发232",
    content: "123123213于磊你收到没",
    createTime: "2020-10-16 14:09:00",
    accepter: "allMessageReceivUser",
    accepterName: null,
    readStatus: 1,
    notificationSend: null,
    skipLinkContent: "38",
  },
  {
    objectid: 222,
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

  ,
  {
    objectid: 111,
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
  ,
  {
    objectid: 11,
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
  ,
  {
    objectid: 134,
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
  ,
  {
    objectid: 167,
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
  ,
  {
    objectid: 865,
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

  ,
  {
    objectid: 977,
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

const notificeListData = (options) => {
  const parameters = getQueryParameters(options)
  console.log(parameters)
  if (parameters && !parameters.page) {
    parameters.page = 1
  }
  if (parameters && !parameters.pageSize) {
    parameters.pageSize = 10
  }
  const startNum = (parameters.page - 1) * parameters.pageSize
  const totalNumber = notificeList.length
  const data = []
  for (let i = 0, index = startNum; i < parameters.pageSize && index < totalNumber; index++, i++) {
    data.push(notificeList[index])
  }
  const pages = Math.ceil(notificeList.length / parameters.pageSize)
  const pageInfo = {
    hasNextPage: parameters.page < pages,
    total: notificeList.length,
    pageSize: parseInt(parameters.pageSize),
    pages: pages,
    pageNum: parseInt(parameters.page),
    data: data
  }
  return builder(pageInfo, '成功', 200)
}
Mock.mock(/\/api\/user\/notifice/, notificeListData)

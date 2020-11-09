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

const myInfo =  {
  accountLoginScope: null,
  accountNonExpired: true,
  accountNonLocked: true,
  apartmentCity: 0,
  avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
  approved: false,
  birthday: "2019-07-20",
  cardid: "",
  companyorigin: "火锅城",
  createDate: "2020-11-02 10:40:14",
  credentialsNonExpired: true,
  deleteFlag: 1,
  department: null,
  education: 353,
  eispUsername: null,
  email: "",
  emailFlag: 0,
  enabled: true,
  enterprise: null,
  enterpriseId: 2078,
  enterpriseInput: "科汇名城0001",
  enterpriseName: null,
  enterprisePhone: null,
  integralNum:364,
  days:2,
  enterpriseRoot: 1,
  hometownCity: 0,
  idnumber: "412702199202022222",
  isDriver: false,
  isFirstLogin: 0,
  isLeaving: null,
  isThirdPartyResidence: false,
  location_parkid: 1,
  marital: 1,
  memberCode: "815850205739034122",
  name: "测试试一下昵称",
  nation: 6,
  parkId: 1,
  phone: "13744441111",
  realName: "姓名",
  regType: null,
  roleArray: null,
  roleList: null,
  settingApartmentCity: null,
  settingDict: null,
  settingHometowntCity: null,
  settingNation: null,
  sex: 2,
  signature: "",
  state: 1,
  status: 1,
  updateDate: "2020-11-02 10:40:14",
  userFace: "/static/uploads/images/20200602/cut20200602095446795.jpg",
  userFlag: 2,
  username: "cg_13744441111",
  wechatHeadimgurl: null,
  wechatOpenid: null,
  workYears: 0
}

Mock.mock(/\/api\/user\/myInfo/, myInfo)

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

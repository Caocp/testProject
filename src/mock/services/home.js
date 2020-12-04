import Mock from 'mockjs2'
import { builder } from '../util'

const slideShows = [
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2443780857,4037332818&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1472484727,3142287316&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2189655625,2805886139&fm=11&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3362853886,1694242564&fm=26&gp=0.jpg'
]

const secondaryMenus = [
  {
    image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454656505,178271830&fm=26&gp=0.jpg',
    text: '停车缴费'
  },
  {
    image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1489115912,3167734733&fm=15&gp=0.jpg',
    text: '余额查询'
  },
  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2449901771,538913299&fm=26&gp=0.jpg',
    text: '游船预约'
  },
  {
    image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2436761375,445658664&fm=26&gp=0.jpg',
    text: '物业报修'
  },
  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2960149194,3213939410&fm=26&gp=0.jpg',
    text: '扫码支付'
  }
]

const notices = [{
  objectid: '15',
  createDate: "2019-12-25 16:23:12",
  updateDate: "2020-02-18 15:34:37",
  parkId: 1,
  title: "智能制造时代，图漾科技为机器打造“3D眼",
  titleType: 3,
  publishType: 2,
  url: null,
  richText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448px; width:3264px" /></p>',
  mobileRichText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448rem; width:3264rem" /></p>',
  image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1452745448,3203267591&fm=26&gp=0.jpg",
  status: 2,
  reasons: null,
}, {
  objectid: '16',
  createDate: "2019-12-25 16:23:12",
  updateDate: "2020-02-18 15:34:37",
  parkId: 1,
  title: "上海浦东软件园园区海报张贴规则",
  titleType: 3,
  publishType: 2,
  url: null,
  richText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448px; width:3264px" /></p>',
  mobileRichText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448rem; width:3264rem" /></p>',
  image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=424996416,2632963976&fm=26&gp=0.jpg",
  status: 2,
  reasons: null,
}, {
  objectid: '17',
  createDate: "2019-12-25 16:23:12",
  updateDate: "2020-02-18 15:34:37",
  parkId: 1,
  title: "关于2020年高新技术企业认定（含入库培育） 相关政策宣讲会通知",
  titleType: 3,
  publishType: 2,
  url: null,
  richText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448px; width:3264px" /></p>',
  mobileRichText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448rem; width:3264rem" /></p>',
  image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2960593836,895105738&fm=26&gp=0.jpg",
  status: 2,
  reasons: null,
}, {
  objectid: '18',
  createDate: "2019-12-25 16:23:12",
  updateDate: "2020-02-18 15:34:37",
  parkId: 1,
  title: "原停车充值卡退款事宜",
  titleType: 3,
  publishType: 2,
  url: null,
  richText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448px; width:3264px" /></p>',
  mobileRichText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448rem; width:3264rem" /></p>',
  image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2637313343,169213215&fm=26&gp=0.jpg",
  status: 2,
  reasons: null,
}, {
  objectid: '19',
  createDate: "2019-12-25 16:23:12",
  updateDate: "2020-02-18 15:34:37",
  parkId: 1,
  title: "关于第六餐厅开放堂食的通知",
  titleType: 3,
  publishType: 2,
  url: null,
  richText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448px; width:3264px" /></p>',
  mobileRichText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448rem; width:3264rem" /></p>',
  image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1231425454,4167090651&fm=26&gp=0.jpg",
  status: 2,
  reasons: null,

}, {
  objectid: '20',
  createDate: "2019-12-25 16:23:12",
  updateDate: "2020-02-18 15:34:37",
  parkId: 1,
  title: "关于通知",
  titleType: 3,
  publishType: 2,
  url: null,
  richText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448px; width:3264px" /></p>',
  mobileRichText: '<p>请问123</p><p><img alt="" src="/static/uploads/images/20200218/20200218153423039.jpg" style="height:2448rem; width:3264rem" /></p>',
  image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3832169948,2550120345&fm=26&gp=0.jpg',
  status: 2,
  reasons: null,

}]

const noticesList = () => {
  return builder(notices, '成功', 200)
}

Mock.mock(/\/api\/noticesList/, noticesList)


const navigateImages = [
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=69127659,2423008554&fm=26&gp=0.jpg', 
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2583549809,423220941&fm=26&gp=0.jpg', 
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3886801325,4225186420&fm=26&gp=0.jpg'
]

const activities = [{
  id: 1,
  name: '健身中心—挑战减脂赢半年卡',
  image: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1202746753,1306796838&fm=26&gp=0.jpg',
  time: '2020/04/16',
  status: 1
}, {
  id: 2,
  name: '刘亦菲新作品   2020敬请期待哟！',
  image: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2692768759,2948708730&fm=26&gp=0.jpg',
  time: '2020/06/10',
  status: 1
}]




const home = () => {
  return builder([{
    type: 'Banner',
    data: {
      items: slideShows
    }
  }, {
    type: 'SecondaryMenu',
    data: { items: secondaryMenus }
  }, {
    type: 'Notice',
    data: { items: notices }
  }, {
    type: 'NavigateImage',
    data: { items: navigateImages }
  }, {
    type: 'Activity',
    data: { title: '活动推荐', items: activities }
  }])
}

Mock.mock(/\/api\/home/, home)

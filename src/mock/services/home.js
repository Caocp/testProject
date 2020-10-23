import Mock from 'mockjs2'
import { builder } from '../util'

const slideShows = [
  'https://www.hispsp.com/static/uploads/images/20200228/20200228163658519.png',
  'https://www.hispsp.com/static/uploads/images/20200228/20200228163431488.jpg',
  'https://www.hispsp.com/static/uploads/images/20180209/20180209134019097.jpg',
  'https://www.hispsp.com/static/uploads/images/20190419/20190419092255611.jpg'
]

const secondaryMenus = [
  {
    image: 'https://www.hispsp.com/static/services/tingchejiaofei.png',
    text: '停车缴费'
  },
  {
    image: 'https://www.hispsp.com/static/services/yuechaxun.png',
    text: '余额查询'
  },
  {
    image: 'https://www.hispsp.com/static/services/youchuanyuyue.png',
    text: '游船预约'
  },
  {
    image: 'https://www.hispsp.com/static/services/wuyebaoxiu.png',
    text: '物业报修'
  },
  {
    image: 'https://www.hispsp.com/static/services/saomafukuang.png',
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
  image: "https://www.hispsp.com/static/uploads/images/20190419/20190419092255611.jpg",
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
  image: "https://www.hispsp.com/static/uploads/images/20200414/20200414170331572.jpg",
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
  image: "https://www.hispsp.com/static/uploads/images/20200228/20200228163431488.jpg",
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
  image: "https://www.hispsp.com/static/uploads/images/20180209/20180209134019097.jpg",
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
  image: "https://www.hispsp.com/static/uploads/images/20170221/20170221135120932.jpg",
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
  image: 'https://www.hispsp.com/static/uploads/images/20191218/20191218100158082.jpg',
  status: 2,
  reasons: null,

}]

const noticesList = () => {
  return builder(notices, '成功', 200)
}

Mock.mock(/\/api\/noticesList/, noticesList)


const navigateImages = ['https://www.hispsp.com/static/uploads/images/20191209/20191209162954973.png', 'https://www.hispsp.com/static/uploads/images/20191209/20191209163058146.png', 'https://www.hispsp.com/static/uploads/images/20191209/20191209163026563.png']

const activities = [{
  id: 1,
  name: '健身中心—挑战减脂赢半年卡',
  image: 'https://www.hispsp.com/static/uploads/images/20200414/20200414170331572.jpg',
  time: '2020/04/16',
  status: 1
}, {
  id: 2,
  name: '乐活-笔尖缤纷绘画社   2020敬请期待哟！',
  image: 'https://www.hispsp.com/static/uploads/images/20191218/20191218100158082.jpg',
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

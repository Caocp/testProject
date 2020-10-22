import Mock from 'mockjs2'
import { builder } from '../util'
const serviceMenuData = [
  {
    title: '基础生活服务',
    items: [{
      name: '健身中心',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163509541.png',
      url: '/gym'
    }, {
      name: '充值',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163541021.png',
      url: ''
    }, {
      name: '停车申请',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163415902.png',
      url: ''
    }, {
      name: '智慧党建',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163012528.png',
      url: ''
    }, {
      name: '智慧工建',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163250461.png',
      url: ''
    }, {
      name: '停车缴费',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163310024.png',
      url: ''
    }, {
      name: '余额查询',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008162921336.png',
      url: ''
    }, {
      name: '游船预约',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163747541.png',
      url: ''
    }, {
      name: '物业报修',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163728085.png',
      url: ''
    }, {
      name: '测评报告',
      icon: 'https://www.hispsp.com/static/uploads/images/20191207/20191207025330054.png',
      url: ''
    }]
  },
  {
    title: '技术网络服务',
    items: [{
      name: 'IT网络报修',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163626536.png',
      url: ''
    }, {
      name: '扫码付款',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163609632.png',
      url: ''
    }]
  },
  {
    title: '商务营运服务',
    items: [{
      name: '会议室预订',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163647623.png',
      url: ''
    }, {
      name: '广告服务申请',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163707427.png',
      url: ''
    }, {
      name: '展厅预约',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163346406.png',
      url: ''
    }]
  }
]
const menus = () => {
  return builder(serviceMenuData, '成功', 200)
}

Mock.mock(/\/api\/service\/menus/, menus)

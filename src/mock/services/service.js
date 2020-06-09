import Mock from 'mockjs2'
import { builder } from '../util'
const serviceMenuData = [
  {
    title: '基础生活服务',
    items: [{
      name: '汇智健身中心',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163509541.png'
    }, {
      name: '充值',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163541021.png'
    }, {
      name: '停车申请',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163415902.png'
    }, {
      name: '智慧党建',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163012528.png'
    }, {
      name: '智慧工建',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163250461.png'
    }, {
      name: '停车缴费',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163310024.png'
    }, {
      name: '余额查询',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008162921336.png'
    }, {
      name: '游船预约',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163747541.png'
    }, {
      name: '物业报修',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163728085.png'
    }, {
      name: '测评报告',
      icon: 'https://www.hispsp.com/static/uploads/images/20191207/20191207025330054.png'
    }]
  },
  {
    title: '技术网络服务',
    items: [{
      name: 'IT网络报修',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163626536.png'
    }, {
      name: '扫码付款',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163609632.png'
    }]
  },
  {
    title: '商务营运服务',
    items: [{
      name: '会议室预订',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163647623.png'
    }, {
      name: '广告服务申请',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163707427.png'
    }, {
      name: '展厅预约',
      icon: 'https://www.hispsp.com/static/uploads/images/20191008/20191008163346406.png'
    }]
  }
]
const menus = () => {
  return builder(serviceMenuData, '成功', 200)
}

Mock.mock(/\/api\/service\/menus/, menus)

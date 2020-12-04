import Mock from 'mockjs2'
import { builder } from '../util'
const serviceMenuData = [
  {
    title: '基础生活服务',
    items: [{
      name: '健身中心',
      icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=169736422,793159512&fm=26&gp=0.jpg',
      url: '/gym'
    }, {
      name: '充值',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3114100821,2245098345&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '停车申请',
      icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454656505,178271830&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '智慧党建',
      icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3809563430,2728941821&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '智慧工建',
      icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4068531920,3488640807&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '停车缴费',
      icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1108124335,1307244111&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '余额查询',
      icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1489115912,3167734733&fm=15&gp=0.jpg',
      url: ''
    }, {
      name: '游船预约',
      icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2449901771,538913299&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '物业报修',
      icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2436761375,445658664&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '测评报告',
      icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1357100924,1236066175&fm=26&gp=0.jpg',
      url: ''
    }]
  },
  {
    title: '技术网络服务',
    items: [{
      name: 'IT网络报修',
      icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=186727615,3184013686&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '扫码付款',
      icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1690394283,1223575366&fm=26&gp=0.jpg',
      url: ''
    }]
  },
  {
    title: '商务营运服务',
    items: [{
      name: '会议室预订',
      icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4182814217,1300089971&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '广告服务申请',
      icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2105444037,1033393584&fm=26&gp=0.jpg',
      url: ''
    }, {
      name: '展厅预约',
      icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4084447085,1916522728&fm=11&gp=0.jpg',
      url: ''
    }]
  }
]
const menus = () => {
  return builder(serviceMenuData, '成功', 200)
}

Mock.mock(/\/api\/service\/menus/, menus)

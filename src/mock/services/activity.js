import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const activities = [{
  id: Mock.mock('@guid'),
  name: '汇智健身中心—挑战减脂赢半年卡',
  image: 'https://www.hispsp.com/static/uploads/images/20200414/20200414170331572.jpg',
  time: '2020/04/16',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '乐活汇-笔尖缤纷绘画社   2020敬请期待哟！',
  image: 'https://www.hispsp.com/static/uploads/images/20191218/20191218100158082.jpg',
  time: '2020/06/10',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '活动报名 | 浦东新区专利快速审查及维权培训会',
  image: 'https://www.hispsp.com/static/uploads/images/20191120/20191120101721612.jpg',
  time: '2020/04/16',
  status: 2
}, {
  id: Mock.mock('@guid'),
  name: '第四餐厅-东南亚风情美食节邀您来品尝',
  image: 'https://www.hispsp.com/static/uploads/images/20191202/20191202104313967.jpg',
  time: '2020/06/10',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '2017浦软园区运动季谁“羽”争锋',
  image: 'https://www.hispsp.com/static/uploads/images/20170401/20170401091909625.jpg',
  time: '2017/04/01',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '上海浦东软件园 政策专递2017年第2期',
  image: 'https://www.hispsp.com/static/uploads/images/20170315/20170315110727851.jpg',
  time: '2017/03/15',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '中国区块链和金融创新科技峰会-更灵活高效的创新金融科技',
  image: 'https://www.hispsp.com/static/uploads/images/20170314/20170314142733959.PNG',
  time: '2017/03/25',
  status: 2
}, {
  id: Mock.mock('@guid'),
  name: '【浦软IT技术沙龙系列讲座】H5生态和REACT',
  image: 'https://www.hispsp.com/static/uploads/images/20170309/20170309103505844.png',
  time: '2017/03/09',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '关于“创新基金政策宣讲会”的通知',
  image: 'https://www.hispsp.com/static/uploads/images/20170221/20170221135120932.jpg',
  time: '2017/03/25',
  status: 2
}, {
  id: Mock.mock('@guid'),
  name: '上海浦东软件园 政策专递2017年第1期',
  image: 'https://www.hispsp.com/static/uploads/images/20170216/20170216152132758.jpg',
  time: '2017/03/09',
  status: 1
}, {
  id: Mock.mock('@guid'),
  name: '“我与浦软同行”金点子征集活动',
  image: 'https://www.hispsp.com/static/uploads/images/20170111/20170111150834519.jpg',
  time: '2017/03/25',
  status: 2
}, {
  id: Mock.mock('@guid'),
  name: '汇智e站服务需求有奖调研',
  image: 'https://www.hispsp.com/static/uploads/images/20161222/20161222170520408.png',
  time: '2017/03/09',
  status: 1
}]

const listActivities = (options) => {
  const parameters = getQueryParameters(options)
  console.log('queryParameters', parameters)
  if (parameters && !parameters.page) {
    parameters.page = 1
  }
  if (parameters && !parameters.pageSize) {
    parameters.pageSize = 4
  }
  const startNum = (parameters.page - 1) * parameters.pageSize
  const totalNumber = activities.length
  const data = []
  for (let i = 0, index = startNum; i < parameters.pageSize && index < totalNumber; index++, i++) {
    data.push(activities[index])
  }
  const pages = Math.ceil(activities.length / parameters.pageSize)
  const pageInfo = {
    hasNextPage: parameters.page < pages,
    total: activities.length,
    pageSize: parseInt(parameters.pageSize),
    pages: pages,
    pageNum: parseInt(parameters.page),
    data: data
  }
  return builder(pageInfo)
}

Mock.mock(/\/api\/activities/, 'get', listActivities)

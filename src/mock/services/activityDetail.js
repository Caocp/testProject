import Mock from 'mockjs2'
import { builder } from '../util'

const activityDetail = 
    {
    id: 2,
    name: '乐活-笔尖缤纷绘画社   2020敬请期待哟！',
    image: 'https://www.hispsp.com/static/uploads/images/20191218/20191218100158082.jpg',
    time: '2020/06/10',
    status: 1,
    startTime: "2020/06/29 12:00:00",
    startTime2: "2020/12/31 23:55:00",
    canSignUpNum: "不限",
    cost: "免费",
    initiator: "杨婷",
    }
    

const activity = () => {
    return builder(activityDetail, '成功', 200)
  }
  
  Mock.mock(/\/api\/activityDetail/, activity)


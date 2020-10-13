import Mock from 'mockjs2'
import { builder } from '../util'

const parkDate = [
    {
    id:3,
    name:'张江园'
    },
    {
        id:4,
        name:'三林园'
    },
]

const park = () => {
    return builder(parkDate, '成功', 200)
  }
  
  Mock.mock(/\/api\/park/, park)


import Mock from 'mockjs2'
import { builder } from '../util'

const parkDate = [
    {
        value:3,
        text:'张江园'
    },
    {
        value:4,
        text:'三林园'
    },
]

const park = () => {
    return builder(parkDate, '成功', 200)
  }
  
  Mock.mock(/\/api\/park/, park)


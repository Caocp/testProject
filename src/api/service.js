import request from '@/utils/request'

export function listMenus () {
  return request({
    url: '/service/menus',
    method: 'get'
  })
}


export function notifice (data) {
  return request({
    url: '/user/notifice',
    method: 'get',
    params: data
  })
}

export function integralList(data) {
  return request({
    url:'user/integralList',
    method:'get',
    params:data
  })
}
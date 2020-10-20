import request from '@/utils/request'

export function listMenus () {
  return request({
    url: '/service/menus',
    method: 'get'
  })
}


export function notifice () {
  return request({
    url: '/user/notifice',
    method: 'get'
  })
}

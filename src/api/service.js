import request from '@/utils/request'

export function listMenus () {
  return request({
    url: '/service/menus',
    method: 'get'
  })
}

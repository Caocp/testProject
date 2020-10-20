import request from '@/utils/request'

export function getHome () {
  return request({
    url: '/home',
    method: 'get'
  })
}


export function getNoticesList () {
  return request({
    url: '/noticesList',
    method: 'get'
  })
}

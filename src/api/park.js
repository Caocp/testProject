import request from '@/utils/request'

export function parkDate () {
  return request({
    url: '/park',
    method: 'get'
  })
}
import request from '@/utils/request'

export function listActivities (parameter) {
  return request({
    url: '/activities',
    method: 'get',
    params: parameter
  })
}

export function findActivityDetail (id) {
  return request({
    url: `/activities/${id}`,
    method: 'get'
  })
}

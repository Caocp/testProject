import request from '@/utils/request'

export function listActivities (parameter) {
  return request({
    url: '/activities',
    method: 'get',
    params: parameter
  })
}


export function activityDate (params) {
  return request({
    url: '/activityDetail',
    method: 'get',
    params: params
  })
}


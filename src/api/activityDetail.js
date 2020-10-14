import request from '@/utils/request'

export function activityDate (parameter) {
  return request({
    url: '/activityDetail',
    method: 'post',
    data: parameter
  })
}
import request from '@/utils/request'

export function login (parameter) {
  return request({
    url: '/login',
    method: 'post',
    data: parameter
  })
}

export function getInfo () {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout (parameter) {
  return request({
    url: '/logout',
    method: 'post',
    data: parameter
  })
}

import request from '@/utils/request'

export function getAuthList(query) {
  return request({
    url: '/auth/list',
    method: 'get',
    params: query
  })
}

export function getAuthAll(query) {
  return request({
    url: '/auth/all',
    method: 'get',
    params: query
  })
}

export function fetchAuth() {
  return request({
    url: '/auth/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/auth/pv',
    method: 'get',
    params: { pv }
  })
}

export function createAuth(data) {
  return request({
    url: '/auth/create',
    method: 'post',
    data
  })
}

export function updateAuth(data) {
  return request({
    url: '/auth/update',
    method: 'post',
    data
  })
}
// 菜单
export function querySpMenus(spId) {
  const data = {
    terminal: 1,
    spId
  }
  return request({
    url: '/portal/querySpMenus',
    method: 'post',
    data
  })
}

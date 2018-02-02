import request from '@/utils/request'

export function loginByUsername(userName, password, callBackUrl) {
  const data = {
    userName,
    password,
    callBackUrl
  }
  return request({
    url: 'http://10.0.51.227:8081/sso/login/mobile',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    url: 'http://10.0.51.227:8081/sso/logout',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getTheme(domain) {
  return request({
    url: '/portal/queryThemeByDomain',
    method: 'post',
    data: { domain }
  })
}

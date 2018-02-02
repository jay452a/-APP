import axios from 'axios'
import { Toast } from 'mint-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: 'http://10.0.51.227:8080', // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    Toast({
      message: error.message,
      iconClass: 'icon icon-error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service

import { getUserInfo } from '@/api/login'
import { getAuthAll, querySpMenus } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    },
    authlist: {},
    menuslist: Cookies.get('menuslist')
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AUTH_LIST: (state, authlist) => {
      state.authlist = authlist
    },
    SET_MENUS_LIST: (state, menuslist) => {
      state.menuslist = menuslist
      Cookies.set('menuslist', menuslist)
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      // const userName = userInfo.username.trim()
      // const callBackUrl = window.location.origin
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', 'fixed')
        setToken('fixed')
        resolve()
      //   loginByUsername(userName, userInfo.password, callBackUrl).then(response => {
      //     console.log(response)
      //     const data = response.data
      //     commit('SET_TOKEN', data.token)
      //     setToken(data.token)
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        const data = {
          role: ['admin'],
          name: 'Super Admin',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          introduction: '我是超级管理员'
        }
        commit('SET_ROLES', data.role)
        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        commit('SET_INTRODUCTION', data.introduction)
        resolve(data)
        // getUserInfo(state.token).then(response => {
        //   if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
        //     reject('error')
        //   }
        //   const data = response.data
        //   commit('SET_ROLES', data.role)
        //   commit('SET_NAME', data.name)
        //   commit('SET_AVATAR', data.avatar)
        //   commit('SET_INTRODUCTION', data.introduction)
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        // logout(state.token).then(() => {
        //   commit('SET_TOKEN', '')
        //   commit('SET_ROLES', [])
        //   removeToken()
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRole({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    },

    // 获取权限
    GetRoleList({ commit }, role) {
      return new Promise(resolve => {
        // commit('SET_TOKEN', role)
        // setToken(role)
        getAuthAll().then(response => {
          const data = response.data
          const result = {}
          for (const item of data) {
            result[item.menu_id] = item
          }
          commit('SET_AUTH_LIST', result)
          resolve(result)
        })
      })
    },

    // 获取菜单
    GetMenusList({ commit }, role) {
      return new Promise(resolve => {
        // commit('SET_TOKEN', role)
        // setToken(role)
        querySpMenus().then(response => {
          const data = response.data
          let result = {}
          result = data
          // for (const item of data) {
          //   result[item.menu_id] = item
          // }
          commit('SET_MENUS_LIST', result)
          resolve(result)
        })
      })
    }
  }
}

export default user

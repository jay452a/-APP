import Cookies from 'js-cookie'
import { getTheme } from '@/api/login'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    language: Cookies.get('language') || 'zh',
    tpStyle: Cookies.get('tpStyle'),
    menuMode: Cookies.get('menuMode'),
    spId: Cookies.get('spId'),
    navShow: true
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SET_THEME: (state, theme) => {
      state.tpStyle = theme.tpStyle
      state.menuMode = theme.menuMode
      state.spId = theme.spId
      Cookies.set('tpStyle', theme.tpStyle)
      Cookies.set('menuMode', theme.menuMode)
      Cookies.set('spId', theme.spId)
    },
    SET_NAV_SHOW: (state, status) => {
      state.navShow = status
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    getTheme({ commit }, host) {
      return new Promise((resolve, reject) => {
        getTheme(host).then(response => {
          const data = response.data
          const tpStyle = data.themeFlag || 'default'
          const menuMode = data.menuMode || 'vertical'
          const spId = data.spId
          commit('SET_THEME', { tpStyle, menuMode, spId })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    setNavShow({ commit }, status) {
      return new Promise((resolve, reject) => {
        commit('SET_NAV_SHOW', status)
      })
    }
  }
}

export default app

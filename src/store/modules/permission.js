import { constantRouterMap, matchallRouterMap } from '@/router'
import { querySpMenus } from '@/api/auth'
import Cookies from 'js-cookie'

const _import = require('@/router/_import_' + process.env.NODE_ENV)

function recomRouter(data, child) {
  const accessedRouters = []
  const cldata = data.children
  if ((!cldata || !cldata.length) && !child) {
    accessedRouters.push({
      path: ``,
      name: `${data.id}`,
      component: _import('index/index'),
      meta: {
        title: data.name,
        icon: data.iconUrl,
        url: data.url,
        noCache: true
      }
    })
  } else {
    for (const item of cldata) {
      accessedRouters.push({
        path: `${item.id}`,
        name: `${item.id}`,
        component: _import('index/index'),
        meta: {
          title: item.name,
          icon: item.iconUrl,
          url: item.url,
          noCache: true
        },
        children: recomRouter(item, true)
      })
    }
  }

  return accessedRouters
}
/**
 * 递归异步路由表，返回符合要求的路由表
 * @param data
 */

function filterAsyncRouter(data) {
  if (!data) data = []
  const accessedRouters = []
  // const redirect = 'noredirect'
  for (const item of data) {
    accessedRouters.push({
      path: `/${item.id}`,
      component: _import('index/index'),
      meta: {
        title: item.name,
        icon: item.iconUrl,
        url: item.url
      },
      children: recomRouter(item)
    })
  }

  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers, matchallRouterMap)
    }
  },
  actions: {
    GenerateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        const spId = Cookies.get('spId')
        console.log(spId)
        querySpMenus(spId).then(response => {
          const data = response.data
          const accessedRouters = filterAsyncRouter(data)
          console.log(accessedRouters)
          commit('SET_ROUTERS', accessedRouters)
          resolve()
        })
      })
    }
  }
}

export default permission

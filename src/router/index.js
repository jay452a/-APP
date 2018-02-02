import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
import addressBookRouter from './addressBookRouter'
Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    role: ['admin','editor']     will control the page role (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '', redirect: '/welcome' },
  { path: '/welcome', component: _import('welcome/index') },
  { path: '/login', name: 'login', component: _import('login/index'), hidden: true },
  {
    path: '/home',
    name: 'home',
    component: _import('home/index'),
    meta: { title: '首页' },
    children: [
      {
        path: '',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        name: 'navigation',
        component: _import('menu/index'),
        meta: { title: '首页' }
      }
    ]
  }
].concat(addressBookRouter)

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const matchallRouterMap = [{ path: '*', redirect: '/404', hidden: true }]

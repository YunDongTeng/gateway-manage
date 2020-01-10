import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: '网关',
    redirect: '/api/apiInfo',
    meta: { title: '网关服务', affix: true },
    children: [
      {
        path: '/api/apiInfo/',
        component: () => import('@/views/api/index'),
        name: 'ApiInfo',
        meta: { title: '网关接口', affix: true }
      },
      {
        path: '/api/addApi/',
        component: () => import('@/views/api/add/addApi'),
        name: 'AddApi',
        hidden: true,
        meta: { title: '添加api', affix: true }
      },
      {
        path: '/api/app/',
        component: () => import('@/views/api/add/addApi'),
        name: 'app',
        meta: { title: '网关应用', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

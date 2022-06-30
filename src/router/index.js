import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import TempRoutes from '../templates/temp/routes'

import ExampleBoardRoutes from '../templates/exampleBoard/routes'
import HappyPractice from '../templates/happyPractice/routes'
import approvalRoutes from '../templates/approvalPractice/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/approval',
    name: 'Home',
    meta: { title: 'Vue study project' },
    component: () => import('../components/Home')
  },
  {
    path: '/main',
    redirect: '/main/partner',
    name: 'Main',
    component: () => import('../components/MainLayout'),
    children: [
      ...HappyPractice,
      ...ExampleBoardRoutes,
      ...approvalRoutes
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFound')
  },
  {
    path: '/temp',
    redirect: '/temp/temp',
    name: 'TempMenu',
    component: () => import('../components/MainLayout'),
    children: [
      ...TempRoutes
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('hideLoader', 'force')
  let routeMetaTitle = to.meta.title
  if (routeMetaTitle === undefined || routeMetaTitle === '') {
    document.title = '피플라이프'
  } else {
    document.title = `${to.meta.title} | 피플라이프`
  }

  if (from.name === to.name && (!to.query.size && !to.query.page)) {
    return
  }
  next()
})

export default router

const HappyPracticeRoutes = [
  {
    path: 'create',
    name: 'PracticeCreate',
    meta: {
      title: '연습 사용자 생성',
      crud: 'create',
      show: true
    },
    component: () => import('./views/PracticeCreate')
  },
  {
    path: 'modalCreate',
    name: 'ModalPracticeCreate',
    meta: {
      title: '연습 생성',
      crud: 'create',
      show: true
    },
    component: () => import('./components/ModalPracticeCreate')
  },
  {
    path: 'read/:id',
    name: 'PracticeDetail',
    meta: {
      title: '연습 사용자 상세',
      crud: 'read',
      show: true
    },
    component: () => import('./views/PracticeDetail.vue')
  },
  {
    path: 'readList',
    name: 'PracticeList',
    meta: {
      title: '연습 사용자 목록',
      crud: 'list',
      show: true
    },
    component: () => import('./views/PracticeList.vue')
  }
]

export default HappyPracticeRoutes

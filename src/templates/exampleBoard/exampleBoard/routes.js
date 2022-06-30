const ExampleBoardListRoutes = [
  {
    path: 'list',
    name: 'ExampleBoardList',
    meta: {
      title: '예시게시판',
      crud: 'list',
      show: true
    },
    component: () => import('./views/ExampleBoardList')
  },
  {
    path: 'create',
    name: 'ExampleBoardCreate',
    meta: {
      title: '게시글 등록',
      crud: 'create',
      show: true
    },
    component: () => import('./views/ExampleBoardCreate')
  },
  {
    path: 'update/:id',
    name: 'ExampleBoardUpdate',
    meta: {
      title: '게시글 수정',
      crud: 'update',
      show: true
    },
    component: () => import('./views/ExampleBoardUpdate')
  }
]

export default ExampleBoardListRoutes

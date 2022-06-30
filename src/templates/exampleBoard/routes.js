import ExampleBoardListRoutes from './exampleBoard/routes'

const ExampleBoardRoutes = [
  {
    path: 'example-board',
    redirect: 'example-board/list',
    component: () => import('./ExampleBoardLayout'),
    name: 'ExampleBoard',
    meta: { title: '예시게시판' },
    children: [
      ...ExampleBoardListRoutes
    ]
  }
]

export default ExampleBoardRoutes

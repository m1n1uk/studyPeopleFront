import HappyPracticeRoutes from './happyPracticeIn/routes'

const practice = [
  {
    path: 'happy',
    redirect: '/main/happy/readList',
    component: () => import('./practiceLayout'),
    name: 'HappyPractice',
    meta: { title: '행복연습' },
    children: [
      ...HappyPracticeRoutes
    ]
  }
]

export default practice

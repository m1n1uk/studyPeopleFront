const TempRoutes = [
  {
    path: 'temp',
    name: 'Temp',
    meta: { title: '임시페이지' },
    component: () => import('./Temp')
  }
]

export default TempRoutes

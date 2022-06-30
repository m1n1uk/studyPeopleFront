import ApprovalInRoutes from './approvalIn/routes'

const ApprovalRoutes = [
  {
    path: 'approval',
    redirect: '/main/approval/approvalList',
    component: () => import('./ApprovalLayOut'),
    name: 'ApprovalPractice',
    meta: { title: '전자결재' },
    children: [
      ...ApprovalInRoutes
    ]
  }
]

export default ApprovalRoutes

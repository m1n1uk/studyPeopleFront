const ApprovalPracticeRoutes = [
  {
    path: 'approvalList',
    name: 'ApprovalList',
    meta: {
      title: '전자결재 목록',
      crud: 'list',
      show: true
    },
    component: () => import('./views/ApprovalList')
  },
  {
    path: 'approvalCreate',
    name: 'ApprovalCreate',
    meta: {
      title: '전자결재 등록',
      crud: 'create',
      show: true
    },
    component: () => import('./views/ApprovalCreate')
  },
  {
    path: 'approvalDetail',
    name: 'ApprovallDetail',
    meta: {
      title: '전자결재 상세',
      crud: 'read',
      show: true
    },
    component: () => import('./views/ApprovalDetail')
  },
  {
    path: 'vacationRequest',
    name: 'VacationRequest',
    meta: {
      title: '휴가원',
      crud: 'create',
      show: true
    },
    component: () => import('./views/ApprovalWrite/VacationRequest.vue')
  },
  {
    path: 'overtimeRequest',
    name: 'OvertimeRequest',
    meta: {
      title: '연장근무신청서',
      crud: 'create',
      show: true
    },
    component: () => import('./views/ApprovalWrite/OvertimeRequest.vue')
  },
  {
    path: 'holidayRequest',
    name: 'HolidayRequest',
    meta: {
      title: '휴일근무신청서',
      crud: 'create',
      show: true
    },
    component: () => import('./views/ApprovalWrite/HolidayRequest.vue')
  },
  {
    path: 'overtimeVacationRequest',
    name: 'OvertimeVacationRequest',
    meta: {
      title: '연장근무대체휴가',
      crud: 'create',
      show: true
    },
    component: () => import('./views/ApprovalWrite/OvertimeVacationRequest.vue')
  }
]

export default ApprovalPracticeRoutes

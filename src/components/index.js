export default {
  install (Vue) {
    Vue.component('GoList', () => import('./_element/GoList'))
    Vue.component('Pagination', () => import('./_element/Pagination'))
    Vue.component('Loader', () => import('./_element/Loader'))
    Vue.component('InputCalendar', () => import('./_element/InputCalendar'))
    Vue.component('InputCalendarVCalendar', () => import('./_element/InputCalendarVCalendar'))
    Vue.component('NoDataMessage', () => import('./_element/NoDataMessage'))

    Vue.component('Loader', () => import('./Loader'))
    Vue.component('ModalSample', () => import('./ModalSample'))
    Vue.component('ModalConfirm', () => import('./ModalConfirm'))
    Vue.component('ModalDelete', () => import('./ModalDelete'))
  }
}

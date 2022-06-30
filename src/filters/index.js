export default {
  install (Vue) {
    /**
     * 숫자, 천 단위마다 콤마 필터
     */
    Vue.filter('numberWithComma', value => {
      if (value !== 0 && !value) return ''
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    })
    /**
     * 날짜 포맷 필터
     */
    Vue.filter('dateFormat', (value, format = 'YYYY-MM-DD') => {
      if (!value) return '-'
      return moment(value).locale('ko').format(format)
    })
    /**
     * 소문자 > 대문자
     */
    Vue.filter('upperCase', value => {
      if (!value) return ''
      return value.toUpperCase()
    })
    // 보험 구분
    Vue.filter('insureType', value => {
      switch (value) {
        case 'Life':
          return '생명보험'
        case 'Damage':
          return '손해보험'
        default:
          return '-'
      }
    })
    // 보험 구분
    Vue.filter('partnerGradeFilter', value => {
      switch (value) {
        case '1':
          return '일반'
        case '2':
          return '실버'
        case '3':
          return '골드'
        case '4':
          return '다이아몬드'
        case '5':
          return '블루 다이아몬드'
        default:
          return '-'
      }
    })
  }
}

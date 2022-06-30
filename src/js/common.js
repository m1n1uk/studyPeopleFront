import $toast from './vanillatoasts'

const COMMON = {
  isReferrer (path) {
    path = path || ''
    return document.referrer && document.referrer.indexOf(path) !== -1
  },
  searchPagination (options) {
    let option = Object.assign({
      type: 'search',
      page: 0,
      route: null,
      router: null,
      form: null,
      callback: null
    }, options)

    if (option.type === 'init') {
      if (location.search) {
        let query = option.route.query
        for (let i in query) {
          if (i === 'page') {
            option.form[i] = parseInt(query[i])
          } else {
            option.form[i] = query[i]
          }
        }
      } else {
        option.router.replace({ query: option.form }).catch(() => {})
      }
    } else if (option.type === 'pagination') {
      option.form.page = (option.page - 1)
      option.router.push({ query: option.form }).catch(() => {})
    } else if (option.type === 'size') {
      option.form.page = 0
      option.form.size = option.size
      option.router.push({ query: option.form }).catch(() => {})
    } else {
      option.form.page = 0
      option.router.replace({ query: option.form }).catch(() => {})
    }
    option.callback()
  },
  createUID () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  },
  /**
   * 현재 초를 분:초 로 치환
   *
   * @param {*} seconds
   * @returns
   */
  countdown (seconds) {
    let min = String(parseInt(seconds / 60) || 0)
    let sec = String(parseInt(seconds % 60) || 0)
    min = min.length === 1 ? `0${min}` : min
    sec = sec.length === 1 ? `0${sec}` : sec

    return `${min}:${sec}`
  },
  /**
   * 오늘 날짜
   *
   * @param {string} [format='YYYY-MM-DD']
   * @returns
   */
  getToDate (format = 'YYYY-MM-DD') {
    return moment().format(format)
  },
  getToDateMonth (format = 'YYYY-MM') {
    return moment().format(format)
  },
  /**
   * 날짜를 원하는 포맷으로 변경
   *
   * @param {*} date
   * @param {string} [format='YYYY-MM-DD']
   * @returns
   */
  getToDateFormat (date, format = 'YYYY-MM-DD') {
    if (!date) return ''
    return moment(date).format(format)
  },
  getToDateBeforeToday (subtract, format = 'YYYY-MM-DD') {
    if (!subtract) return ''
    return moment().subtract(subtract, 'days').format(format)
  },
  getToDateAfterToday (after, format = 'YYYY-MM-DD') {
    if (!after) return ''
    return moment().add(after, 'days').format(format)
  },
  initObserver (observerTarget, targetNode, callback) {
    if (!targetNode) return

    observerTarget = new MutationObserver(() => {
      if (COMMON.isFunction(callback)) {
        callback()
      }
    })

    observerTarget.observe(targetNode, { attributes: true, childList: true })
  },
  /**
   * 만 나이 계산
   *
   * @param { Strong, Date } birthDate
   * @returns
   */
  getManAge (birthDate) {
    if (!birthDate) return

    let birthday = new Date(birthDate)
    let today = new Date()
    let years = today.getFullYear() - birthday.getFullYear()

    birthday.setFullYear(today.getFullYear())

    if (today < birthday) {
      years--
    }

    return years
  },
  /**
   * 보험 나이 계산
   * @param { Strong, Date } birthDate
   * @returns { String } bohumAge
   */
  getBohumAge (birthDate) {
    if (!birthDate) return
    let bohumAge = Math.abs(Math.floor(moment().diff(moment(birthDate, 'YYYYMMDD').add(-6, 'months'), 'years', true))).toString()
    return bohumAge
  },
  /**
   * API GET 요청시 파라미터 특수문자를 코드로 변환
   */
  replaceAPIGETParameter (parameter) {
    parameter = parameter.replace(/&/g, '%26')
    parameter = parameter.replace(/\+/g, '%2B')
    parameter = parameter.replace(/=/g, '%3D')

    return parameter
  },
  getAddress () {
    return new Promise((resolve, reject) => {
      daum.postcode.load(() => {
        new daum.Postcode({
          oncomplete (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let fullAddr = '' // 최종 주소 변수
            let extraAddr = '' // 조합형 주소 변수

            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
              fullAddr = data.roadAddress
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
              fullAddr = data.jibunAddress
            }

            // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
            if (data.userSelectedType === 'R') {
              // 법정동명이 있을 경우 추가한다.
              if (data.bname !== '') {
                extraAddr += data.bname
              }
              // 건물명이 있을 경우 추가한다.
              if (data.buildingName !== '') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName)
              }
              // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
              fullAddr += (extraAddr !== '' ? '(' + extraAddr + ')' : '')
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            // document.getElementById('postCode').value = data.zonecode // 5자리 새우편번호 사용
            // document.getElementById('address').value = fullAddr

            // 커서를 상세주소 필드로 이동한다.
            // document.getElementById('addressDetail').focus()

            resolve({
              zonecode: data.zonecode,
              address: fullAddr
            })
          }
        }).open()
      })
    })
  },
  validateErrorMsg () {
    $toast.create({
      type: 'warning',
      text: '필수 입력값을 확인해주세요'
    })

    return false
  },
  /**
   * 클립보드에 텍스트 복사하기
   * @param { String } text
   */
  copyClipboard (text) {
    if (!text) return

    let t = document.createElement('textarea')
    document.body.appendChild(t)
    t.value = text
    t.select()
    document.execCommand('copy')
    document.body.removeChild(t)

    $toast.create({
      type: 'success',
      text: '내용이 클립보드에 복사되었습니다'
    })
  }
}

export default COMMON

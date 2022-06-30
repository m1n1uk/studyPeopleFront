export default {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          mixinPageCodeIcon: [{
            iconId: '1',
            iconName: '우수 전환율'
          }, {
            iconId: '2',
            iconName: '프로모션'
          }, {
            iconId: '3',
            iconName: 'NEW'
          }]
        }
      },
      computed: {
        mixinRouteName () {
          return this.$route.matched
        },
        mixinCompanies () {
          return this.$store.getters.getCompanies
        },
        mixinAuthRoles () {
          return this.$store.getters.getAuthRoles
        },
        mixinUser () {
          return this.$store.getters.getUser
        },
        mixinPartnerGrade () {
          return this.$store.getters.getPartnerGrades
        }
      },
      methods: {
        mixinGoBack () {
          this.$router.go(-1)
        },
        /**
         * 파일업로드 공통 메소드
         * @param { Object } options
         */
        $uploadFiles (options) {
          let option = Object.assign({
            files: {},
            dataKey: 'uploadFiles',
            apiURL: ''
          }, options)

          return new Promise((resolve, reject) => {
            if (!option.apiURL || Object.keys(option.files).length < 1) {
              reject(new Error('error'))
            }

            let data = new FormData()

            let files = option.files

            for (let i in files) {
              if (typeof files[i] === 'object') {
                data.append(option.dataKey, files[i])
                console.log(files[i])
              }
            }

            this.$store.commit('showLoader')
            this.$http({
              method: 'post',
              headers: { 'Content-Type': 'multipart/form-data' },
              url: option.apiURL,
              data: data
            }).then(result => {
              this.$store.dispatch('hideLoader')
              resolve(result)
            }).catch(error => {
              this.$store.dispatch('hideLoader')

              reject(error)
            })
          })
        },
        /**
         * 녹취 시간 계산
         * @param { String, String } String 시작,종료
         * @returns
         */
        $getRecordTimeDiff (startDate, endDate) {
          let timeDiff = '-'
          let sDate = new Date(startDate)
          let eDate = new Date(endDate)
          // let sDate = new Date('2019-04-18 16:39:06')
          // let eDate = new Date('2019-04-18 17:39:06')
          let value = moment.duration(eDate - sDate).asSeconds()
          let hour = parseInt(value / 3600)
          let min = parseInt((value % 3600) / 60)
          let sec = value % 60

          if (hour.toString().length === 1) hour = '0' + hour
          if (min.toString().length === 1) min = '0' + min
          if (sec.toString().length === 1) sec = '0' + sec

          let hhmmss = hour + ':' + min + ':' + sec

          if (value > 0) {
            timeDiff = moment(hhmmss, 'hhmmss').format('HH:mm:ss')
          }
          return timeDiff
        }
      }
    })
  }
}

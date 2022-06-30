<template>
  <div id="app">
    <loader></loader>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.initProtocalPlugins()

    this.getCompanies()
    // this.getPartnerGrades()
  },
  methods: {
    /**
     * 파인즈
     * 보험사 조회
     */
    getCompanies () {
      if (this.$store.getters.getCompanies.length < 1) {
        let data = {}

        const apiURL = `${this.ENV_PINES}/pines/commons/insures`

        this.$http({
          method: 'get',
          url: apiURL,
          data: data
        }).then(result => {
          this.$store.commit('setCompanies', result.data.contents)
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    /*
    * 파트너 등급 조회
    */
    // getPartnerGrades () {
    //   if (this.$store.getters.getCompanies.length < 1) {
    //     let data = {}

    //     const apiURL = `${this.ENV_PARTNER}/partner-common/codes/code-type/GRADE`

    //     this.$http({
    //       method: 'get',
    //       url: apiURL,
    //       data: data
    //     }).then(result => {
    //       this.$store.commit('setPartnerGrades', result.data.contents)
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    //   }
    // },
    loadScripts (plugins) {
      return new Promise((resolve, reject) => {
        if (window[plugins.name] && window[plugins.name]) {
          return resolve()
        }

        let script = document.createElement('script')
        script.async = true
        script.charset = 'utf-8'
        if (location.protocol === 'https:') {
          script.src = plugins.https
        } else {
          script.src = plugins.http
        }

        const dom = document.head ||
          document.getElementsByTagName('head')[0] ||
          document.body ||
          document.getElementsByTagName('body')[0]

        dom.appendChild(script)

        return resolve()
      })
    },
    initProtocalPlugins () {
      let protocolPluginList = [{
        name: 'daum',
        https: 'https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false',
        http: 'http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false'
      }]
      protocolPluginList.forEach(item => {
        this.loadScripts(item)
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/cmm.scss';
@import '@/assets/scss/table.scss';
@import '@/assets/scss/vanillatoasts.scss';
@import '@/assets/scss/button.scss';
@import '@/assets/scss/pagination.scss';
@import '@/assets/scss/modal.scss';
@import '@/assets/scss/search.scss';
@import '@/assets/scss/form.scss';
@import '@/assets/scss/calendar.scss';
@import '@/assets/scss/toggle.scss';
@import '@/assets/scss/checkbox.scss';

.fade-enter-active,
.fade-leave-active { transition: opacity .2s }

.fade-enter,
.fade-leave-to { opacity: 0 }
</style>

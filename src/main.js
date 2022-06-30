import './plugins'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './registerServiceWorker'

import GlobalFilters from './filters'
import GlobalComponents from './components'
import COMMON from './js/common'
import MIXSINS from './js/mixins'

import { ENV_PINES, ENV_SAMPLE } from './js/env'
import projectInit from './js/projectInit'

Vue.config.productionTip = false

Vue.use(MIXSINS)
Vue.use(GlobalFilters)
Vue.use(COMMON)
Vue.use(GlobalComponents)

Vue.prototype.$eventBus = new Vue()
Vue.prototype.$http = axios
Vue.prototype.COMMON = COMMON

Vue.prototype.ENV_PINES = ENV_PINES
Vue.prototype.ENV_SAMPLE = ENV_SAMPLE

projectInit.init().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

import Vue from 'vue'

import VueCookie from 'vue-cookie'
import VModal from 'vue-js-modal'

// vanillatoasts
import 'vanillatoasts/vanillatoasts.css'
import 'vanillatoasts'
import vanillatoasts from '../js/vanillatoasts'

// v-calendar
import VCalendar from 'v-calendar'
import Vue2Editor from 'vue2-editor'

import VueDatePicker from '@mathieustan/vue-datepicker'

// VeeValidate
import VeeValidate from 'vee-validate'

Vue.use(VueCookie)
Vue.use(VModal)
Vue.use(VCalendar)
Vue.use(Vue2Editor)
Vue.use(VueDatePicker)
Vue.use(VeeValidate)

Vue.prototype.$toast = vanillatoasts

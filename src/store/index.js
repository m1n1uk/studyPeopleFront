import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaderCount: 0,
    companies: [],
    auth_roles: [],
    user: {},
    partnerGrades: []
  },
  getters: {
    getLoaderCount (state) {
      return state.loaderCount
    },
    getCompanies (state) {
      return state.companies
    },
    getAuthRoles (state) {
      return state.auth_roles
    },
    getUser (state) {
      return state.user
    },
    getPartnerGrades (state) {
      return state.partnerGrades
    }
  },
  mutations: {
    setCompanies (state, value) {
      state.companies = value
    },
    setAuthRoles (state, value) {
      state.auth_roles = value
    },
    showLoader (state) {
      state.loaderCount += 1
    },
    setUser (state, value) {
      state.user = value
    },
    setPartnerGrades (state, value) {
      state.partnerGrades = value
    },
    hideLoader (state, value) {
      if (value === 'force') {
        state.loaderCount = 0
        return
      }

      if (state.loaderCount < 1) {
        state.loaderCount = 0
        return
      }

      if (state.loaderCount === 1) {
        setTimeout(() => {
          state.loaderCount -= 1
        }, 300)
        return
      }

      state.loaderCount -= 1
    }
  },
  actions: {
    hideLoader ({ state, commit }, payload) {
      if (payload === 'force') {
        commit('hideLoader')
        return
      }

      if (state.loader_count < 1) {
        commit('hideLoader')
        return
      }

      setTimeout(() => {
        commit('hideLoader')
      }, 200)
    }
  },
  modules: {
  }
})

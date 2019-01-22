import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryIdVoting: null
  },
  mutations: {
    setCountryIdVoting (state, data) {
      state.countryIdVoting = data
    }
  },
  actions: {
  }
})

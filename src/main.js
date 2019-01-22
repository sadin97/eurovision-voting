import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Font Awesome.
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowCircleLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Axios.
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Countries flag.
import CountryFlag from 'vue-country-flag'
Vue.component('vue-country-flag', CountryFlag)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

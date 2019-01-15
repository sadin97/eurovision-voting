import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Countries from './components/Countries.vue'
import Results from './components/Results.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/countries',
      name: 'countries',
      component: Countries
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    }
  ]
})

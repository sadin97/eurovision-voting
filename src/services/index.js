import axios from 'axios'
// import { index } from '../store'
const api = 'http://localhost:5555/api/v1'

export default class Service {
  headers () {
    return {
      headers: {
      }
    }
  }
  get (route) {
    return axios.get(`${api}${route}`, this.headers())
  }
  post (route, data) {
    return axios.post(`${api}${route}`, data, this.headers())
  }
  put (route, data) {
    return axios.put(`${api}${route}`, data, this.headers())
  }
  delete (route) {
    return axios.delete(`${api}${route}`, this.headers())
  }
}

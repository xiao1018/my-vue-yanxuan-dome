import axios from 'axios'
import api from './api'

function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      baseURL: api.HOST
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function post (url, param) {
  const data = param || {}
  return new Promise((resolve, reject) => {
    axios.post(url, {
      data,
      baseURL: api.HOST
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export default {
  get,
  post
}

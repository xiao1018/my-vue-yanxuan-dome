import axios from 'axios'
import api from './api'

<<<<<<< HEAD
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
=======
function handleParam (param) {
  if (!param) {
    return ''
  }
  var strParam = ''
  Object.entries(param).forEach((item, index) => {
    if (index === Object.entries(param).length - 1) {
      strParam += `${item.join('=')}`
      return strParam
    }
    strParam += `${item.join('=')}&`
  })
  const timestamp = `?__timestamp=${Date.now()}&`

  return timestamp + strParam
}

function get (url, param) {
  return new Promise((resolve, reject) => {
    const href = url + handleParam(param)
    axios.get(href, {
      baseURL: api.HOST
    })
      .then(data => resolve(data))
      .catch(error => reject(error))
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
  })
}

export default {
<<<<<<< HEAD
  get,
  post
=======
  get
>>>>>>> 525dfd4558e62639422d3301ed3a7d0f9d3d5637
}

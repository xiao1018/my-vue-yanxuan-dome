import axios from 'axios'
import api from './api'

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
  })
}

export default {
  get
}

import axios from 'axios'

export function get(url, params) {
  return axios.get(url, params).then(data => {
    console.log('get请求触发了')
    return data
  })
}

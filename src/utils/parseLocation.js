import http from './http'
import MD5 from 'md5.js'

export function parseLocation (lat, lng) {
  const domain = 'https://apis.map.qq.com'
  let params = {
    key: process.env.LBS_QQ_KEY,
    location: `${lat},${lng}`
  }
  let uri = '/ws/geocoder/v1?' + Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&')

  let sig = getSig(uri)

  const url = domain + uri + `&sig=${sig}`
  console.log(url)
  return http.get(url)
}

function getSig (uri) {
  uri = uri + process.env.LBS_QQ_SECRET_KEY
  return new MD5().update(uri).digest('hex')
}

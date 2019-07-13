class Http {
  _http (method, url, data = null, header = null) {
    return new Promise((resolve, reject) => {
      wx.request({
        method,
        url,
        data,
        header,
        success (res) {
          resolve(res)
        },
        fail (res) {
          reject(res)
        }
      })
    })
  }

  get (url) {
    return this._http('GET', url)
  }
}

export default new Http()

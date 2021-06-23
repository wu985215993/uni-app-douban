const baseURL = 'http://jacklv.cn:3001'
export default function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL + url,
      method: options.method || 'POST',
      data: options.data || {},
      success(res) {
        const {
          statusCode
        } = res;
        switch (statusCode) {
          case 200:
            resolve(res.data);
            break;
          default:
            uni.showToast({
              title: '密码错误',
              icon: 'none'
            });;
        }
      }
    })
  })
}

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.response.use(function (response) {
    if (response.status >= 400 && response.status < 500) {
        debugger;
        // 对返回状态码为 4xx 的请求统一处理
        // 此处统一跳转 404 页面
        
    } else {
      return response
    }
  }, function (error) {
      if (error.response.status >=400 && error.response.status < 500) {
        window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/home`)
      }
      console.log(error.response)
    debugger;
    // alert(error.response.message)
  })

export default axios;
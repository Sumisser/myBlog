import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(request => {
  const token = window.localStorage.getItem('token');
  if (token) {
    // request.headers['Authorization'] = token;
    request.headers['Authorization'] = `Bearer ${token}`;
  }
  return request;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status > 400 && error.response.status < 500) {
      window.location.href = decodeURI(
        `${window.location.protocol}//${window.location.host}/404`
      );
    }
    return Promise.reject(error);
  }
);

export default axios;

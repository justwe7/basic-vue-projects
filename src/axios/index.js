import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

/*实例化一个axios对象*/
let axios_instance = axios.create({
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  // headers:{'Content-Type':'application/x-www-form-urlencoded'},
  // timeout: 5000
})

let isDev = process.env.NODE_ENV === 'development';
if (isDev){//如果是开发环境 设置一个模拟的请求头
  //axios_instance.defaults.baseURL = '/api'; //设置baseurl mock地址
  /*
  代理url在 config下index中设置
   */
}

axios_instance.interceptors.request.use(config => {
  //在发送请求之前做某事，比如说 设置loading动画显示
  return config
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

//添加响应拦截器
axios_instance.interceptors.response.use(response => {
  //对响应数据做些事，比如说把loading动画关掉
  return response
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

Vue.prototype.$axios = axios_instance;

export default axios_instance;

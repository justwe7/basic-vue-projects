import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/example'; //设置baseurl

axios.interceptors.request.use(config => {
  //在发送请求之前做某事，比如说 设置loading动画显示
  console.log('请求之前');
  return config
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  //对响应数据做些事，比如说把loading动画关掉
  return response
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

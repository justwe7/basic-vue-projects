import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './axios'
// Vue.use(Vuex);

import '@common/css/reset.css';//引入css reset
import '@common/sass/mixin.scss';//引入sass mixin


Vue.config.productionTip = false;//禁止vue启动提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
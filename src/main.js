// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './axios'

import 'my_common/css/reset.css';//引入css reset
import 'my_common/sass/mixin.scss';//引入sass mixin


Vue.config.productionTip = false;//禁止vue启动提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

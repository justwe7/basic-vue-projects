<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {httpHello,RES_OK} from "@/api/get.js"

export default {
  name: 'hello',
  data() {
    return {
      msg: '家'
    }
  },
  created() {
    console.log(`vuex数据state count:${this.$store.state.count}`);
    httpHello(8848).then((res) => {
      if (res.errcode == RES_OK) {
        console.log(res)
      }
    }).catch((err) => {
      throw Error(err)
    })
    /*this.$axios.get(
     '/doctor/init',{
        params: {
          weixinid: 2
        }
      }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(9)
    });*/
  }
}
</script>

<!-- scoped添加私有样式  lang添加babel编译  rel添加IDE识别 -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>

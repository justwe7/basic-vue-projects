<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>我们是害虫</p>
  </div>
</template>

<script type="text/ecmascript-6">
import {httpHello,RES_OK} from "@/api/get.js"

export default {
  name: 'hello',
  data() {
    return {
      msg: '内容'
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

<style scoped lang="scss" rel="stylesheet/scss">

</style>

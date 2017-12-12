<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
import {httpLogout,RES_OK} from "@/api/post.js"

export default {
  name: 'hello',
  data() {
    return {
      msg: '主页下的子页面'
    }
  },
  created() {
    httpLogout().then(function (response) {
      console.log(response)
    }).catch(function (error) {
      throw Error('失败')
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.home{
    height: 100px;
    background-color: #f99;
}
</style>

<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'hello',
  data() {
    return {
      msg: '主页下的子页面'
    }
  },
  mounted() {
    console.log(this.$route.path)
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.home{
    height: 100px;
    background-color: #f99;
}
</style>

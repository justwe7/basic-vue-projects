<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li class="fl">111</li>
      <li class="fr">222</li>
    </ul>
    <a href="javascript:;" @click="push">添加路由（无页面跳404）</a>
    <router-link to="/home/child">打开子页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'hello',
  data() {
    return {
      msg: '主页'
    }
  },
  methods: {
    push() {
      this.$router.push({
          path: `/home/${111}`
        })
    }
  }
}
</script>

<!-- scoped添加私有样式  lang添加babel编译  rel添加IDE识别 -->
<style scoped lang="scss" rel="stylesheet/scss">
.home{
    ul{
        width: unit(300rem);
        @extend %centerblock;
        @include clearfix();
        background-color: $colorccc;
        background-repeat: no-repeat;
        @include bg-image('icon');
    }
}
</style>

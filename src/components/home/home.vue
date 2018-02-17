<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li class="fl">111</li>
      <li class="fr">222</li>
    </ul>
    <a href="javascript:;" @click="push">添加路由（无页面跳404）</a>
    <router-link to="/home/child/i'mdata">打开子页面</router-link>
    <router-view />
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

<style scoped lang="scss" rel="stylesheet/scss">
.home{
    ul{
        width: unit(300rem);
        @extend %centerblock;
        @extend %clearfix;
        background-color: $colorccc;
        background-repeat: no-repeat;
        @include bg-image('icon');
    }
}
</style>

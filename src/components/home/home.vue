<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li class="fl">111</li>
      <li class="fr">222</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'hello',
  data() {
    return {
      msg: '主页'
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

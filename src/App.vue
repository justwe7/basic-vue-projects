<template>
  <div id="app">
    <router-view name="navbar" :class="{'hide_nav': Nav}"/>
    <router-view class="container" />
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      Nav: 'showNav'
    })
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .hide_nav{
    opacity: 0.3;
  }
  .container{
    margin-top: 60px;
    border: 1px solid #000;
  }
}
</style>

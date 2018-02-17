<template>
  <div @click.prevent>
    <router-link to="/home" title="主页">
        <span>主页</span>
    </router-link>
    <router-link to="/hello" title="内容">
        <span>内容</span>
    </router-link>
    <button type="button" @click.stop.prevent="hide">{{Nav ? '展示' : '隐藏'}}导航点击次数{{count}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      Nav: 'showNav',
      count: 'count'
    })
  },
  methods: {
    ...mapActions(['_changeNavBar', '_decrement']),
    hide() {
      this._changeNavBar();
      this._decrement();
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>

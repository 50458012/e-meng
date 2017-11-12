<template>
  <div id="app">
    <footNav></footNav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import footNav from './components/foot.vue'
export default {
  data(){
    return{
      home:{}
    }
  },
  components:{footNav}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
#app
  width 100%
  height 100%
</style>

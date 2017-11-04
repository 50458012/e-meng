<template>
  <div id="app">
    <upper></upper>
    <middle></middle>
    <bottom></bottom>
  </div>
</template>

<script>
  import upper from './components/header.vue'
  import bottom from './components/foot.vue'
  import middle from './components/middle.vue'
export default {
  components:{upper,bottom,middle}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
#app
  padding (86/$rem) 0 (55/$rem) 0
</style>

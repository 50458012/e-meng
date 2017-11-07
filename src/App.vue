<template>
  <div id="app">
    <upper :menus="home.menus"></upper>
    <middle :datas="home.datas"></middle>
    <bottom></bottom>
  </div>
</template>

<script>
  import axios from 'axios'
  import upper from './components/header.vue'
  import bottom from './components/foot.vue'
  import middle from './components/middle.vue'
export default {
  data(){
    return{
      home:{}
    }
  },

    mounted(){
      axios.get('/api/main').then(res=>{
        this.home = res.data
      }).catch(err=>console.log(err))
    },

  components:{upper,bottom,middle}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
#app
  padding (86/$rem) 0 (55/$rem) 0
</style>

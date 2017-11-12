<template>
  <div id="wrap">
    <upper :menus="home.menus"></upper>
    <scroller>
      <middle :datas="home.datas"></middle>
    </scroller>
  </div>
</template>

<script>
  import axios from 'axios'
  import upper from './content/header.vue'
  import middle from './content/middle.vue'
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

  components:{upper,middle}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
#wrap
  width 100%
  height 100%
  position relative
  overflow hidden
</style>

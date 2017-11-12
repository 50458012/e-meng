<template>
        <footer class="foot">
          <router-link to="./home"><span></span></router-link>
          <router-link to="./classify"><span></span></router-link>
          <router-link to="./shopCart"><span></span></router-link>
          <router-link to="./mine"><span></span></router-link>
        </footer>
</template>

<script>
      export default {
            data() {
                  return {}
            }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.foot
  position fixed
  z-index 2
  background-color: #fff
  bottom 0
  display flex
  width 100%
  height (55/$rem)
  a
    flex 1 0 20%
    text-align center
    line-height (75/$rem)
    &>span
      display inline-block
      width (42/$rem)
      height (40/$rem)
      background url("/static/img/img.png") no-repeat
      background-size 530%
    &:nth-of-type(2)>span
      background-position 45% 34%
    &:nth-of-type(3)>span
      background-position 45% 68%
    &:nth-of-type(4)>span
      background-position 45% 102%




</style>

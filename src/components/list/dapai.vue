<template>
  <ul class="dapaiList">
    <li v-for="item in seller">
      <a :href="item.param">
        <img :src="item.image">
      </a>
    </li>
  </ul>
</template>

<script>
      export default {
        props:{
          seller:Array
        },
            data() {
                  return {}
            }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
  .dapaiList
    width 100%
    height (300/$rem)
    li
      width 25%
      height (105/$rem)
      float left
      img
        vertical-align top
        width 100%
        height 100%
      &:nth-of-type(2)
        height (100/$rem)
        position relative
        z-index 1
        top (7/$rem)
      &:nth-of-type(6)
        transform scaleY(1.05) translateY((-1/$rem))
      &:nth-of-type(4)
        height (210/$rem)
        float right
      &:nth-of-type(9), &:nth-of-type(8)
        width 50%
        height (90/$rem)

</style>

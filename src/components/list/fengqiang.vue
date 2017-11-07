<template>
  <div class="fengqiang">
    <div class="title">
      <img :src="list.image.img" alt="list.alt">
      <span>{{list.title}}</span>
      <span>  02  </span>:
      <span>  21 </span>:
      <span>  39 </span>
      <a :href="list.target" class="more">
        <img :src="list.image.icon">
      </a>
    </div>
    <a class="fengQiangWrap" :href="list.target" ref="wrap">
      <ul class="goodsList" ref="list">
        <li v-for="item in list.goods">
            <img :src="item.image">
            <p class="price">￥{{item.sale_price}}</p>
            <p class="totalPrice">{{item.little_price}}</p>
        </li>
      </ul>
    </a>
  </div>

</template>

<script>
  import {nav} from '../../tool'
  export default {
    props:{
      list:Object
    },
    mounted(){
      nav(this.$refs)
    },
     data() {
                  return {}
            }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.fengqiang
  width 100%
  .title
    height (60/$rem)
    width 100%
    box-sizing border-box
    padding (10/$rem)
    line-height (40/$rem)
    font-size (12/$rem)
    overflow hidden
    &>img
      width (105/$rem)
      height (24/$rem)
      margin-left (-10/$rem)
      margin-right (10/$rem)
      vertical-align middle
    span
      &:not(:first-of-type)
        padding 0 (2/$rem)
        border (1/$rem) solid
    .more
      vertical-align middle
      float right
      text-align right
      width (104/$rem)
      height (40/$rem)
      img
        width (87/$rem)
        height (40/$rem)
  .fengQiangWrap
    display block
    width 100%
    height (131/$rem)
    overflow hidden
    margin-bottom  (10/$rem)
    .goodsList
      display flex
      flex-wrap nowrap
      li
        width (85/$rem)
        height (131/$rem)
        padding 0 (10/$rem)
        text-align center
        img
          width (85/$rem)
          height (85/$rem)
        .price
          height (25/$rem)
          color red
          font-size (14/$rem)
        .totalPrice
          height (20/$rem)
          color #999
          font-size (12/$rem)
  

</style>

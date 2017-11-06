<template>
  <div class="fengQiangWrap" ref="wrap">
    <ul class="goodsList" ref="list">
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2015-08/11/14/36630f75de7d88f6f40b47094b34620b.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-09/19/11/98c862dd787a46f684cab257d4937c72.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-02/04/18/dd84dd98ac26d2633b33ee5fd4eb0d76.jpg" alt="">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2015-08/11/14/36630f75de7d88f6f40b47094b34620b.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-09/19/11/98c862dd787a46f684cab257d4937c72.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-02/04/18/dd84dd98ac26d2633b33ee5fd4eb0d76.jpg" alt="">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2015-08/11/14/36630f75de7d88f6f40b47094b34620b.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-09/19/11/98c862dd787a46f684cab257d4937c72.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-02/04/18/dd84dd98ac26d2633b33ee5fd4eb0d76.jpg" alt="">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2015-08/11/14/36630f75de7d88f6f40b47094b34620b.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-09/19/11/98c862dd787a46f684cab257d4937c72.jpg">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="https://img1.epetbar.com/2017-02/04/18/dd84dd98ac26d2633b33ee5fd4eb0d76.jpg" alt="">
          <p class="price">￥2.63</p>
          <p class="totalPrice">省￥23.71</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {nav} from '../../tool'
  export default {
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
.fengQiangWrap
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
      a
        display block
        width (85/$rem)
        height (85/$rem)
        background-color: #bfc
        img
          width 100%
          height 100%
        .price
          width 100%
          height (25/$rem)
          color red
          font-size (14/$rem)
        .totalPrice
          width 100%
          height (20/$rem)
          color #999
          font-size (12/$rem)


</style>

<template>
  <header class="header">
    <div class="top">
      <a href="javascript:;"  class="animo">狗狗站 |</a>
      <a href="javascript:;" class="area">重庆 ▼</a>
      <input class="search" type="search" placeholder="搜索商品名和品牌"/>
      <a href="javascript:;" class="anyMore"></a>
    </div>
    <div class="bottom" ref="wrap">
        <nav class="nav" ref="list">
          <a v-for="menu in menus" :href="menu.menu_target" :class="{active:menu.menu_shareid}">{{menu.menu_name}}</a>
        </nav>
      </div>
  </header>
</template>
<script>
import {nav} from '../tool'
export default {
  props:["menus"],
  updated( ){
    nav(this.$refs)
  },
  data () {
    return {
    }
  },
  methods:{ },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.header
  position fixed
  z-index 3
  background-color: #fff
  top 0
  width: 100%
  height (86/$rem)
  font-size (14/$rem)
  .top
    width: 100%
    box-sizing border-box
    padding (13/$rem) (10/$rem)
    .anyMore
      display inline-block
      width (25/$rem)
      height (25/$rem)
      background url("../img/more.png")
      background-size 100% 100%
      vertical-align middle
      margin-left (1.8/$rem)
    .search
      width (220/$rem)
      height (25/$rem)
      background-color: #ddd
      padding 0 (8/$rem)
      border-radius (5/$rem)
  .bottom
    width 100%
    overflow hidden
    .nav
      display flex
      a
        flex 1 0  (75/$rem)
        line-height (36/$rem)
        height (36/$rem)
        text-align center
        width (75/$rem)
        &.active
          border-bottom (1.5/$rem) solid #666
</style>

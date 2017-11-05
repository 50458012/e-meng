<template>
  <header class="header">
    <div class="top">
      <a href="#" class="animo">狗狗站 |</a>
      <a href="#" class="area">重庆 ▼</a>
      <input class="search" type="search" placeholder="搜索商品名和品牌"/>
      <a href="#" class="anyMore"></a>
    </div>
    <div class="bottom">
        <nav class="nav">
          <a href="#" class="active">首&nbsp;&nbsp;页</a>
          <a href="#">服饰城</a>
          <a href="#">狗狗主粮</a>
          <a href="#">医疗保健</a>
          <a href="#">零食玩具</a>
          <a href="#">日用外出</a>
          <a href="#">美容香波</a>
        </nav>
      </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
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
  box-sizing border-box
  padding (5/$rem) (10/$rem)
  font-size (14/$rem)
  .top
    padding (8/$rem) 0
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
    .nav
      width 100%
      overflow hidden
      display flex
      a
        line-height (36/$rem)
        height (36/$rem)
        text-align center
        flex 1 0 20%
        &.active
          border-bottom (1.5/$rem) solid #666
</style>

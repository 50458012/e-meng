<template>
  <div class="content">
    <img src="../img/title.jpg" alt="" class="titleImg1">
    <img src="../img/main.jpg" alt="" class="mainImg">
    <nav class="mainNav">
      <a href="#"><img src="../img/echongtuan.jpg" alt=""></a>
      <a href="#"><img src="../img/pinpaitemai.jpg" alt=""></a>
      <a href="#"><img src="../img/echongguoji.jpg" alt=""></a>
      <a href="#"><img src="../img/tiyanguan.jpg" alt=""></a>
      <a href="#"><img src="../img/qingcangtejia.jpg" alt=""></a>
      <a href="#"><img src="../img/chaopin.jpg" alt=""></a>
      <a href="#"><img src="../img/xinwangketang.jpg" alt=""></a>
      <a href="#"><img src="../img/xinpinzhou.jpg" alt=""></a>
    </nav>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.content
  .titleImg1, .mainImg
    width 100%
    margin-bottom (-4/$rem)
  .mainNav
    width 100%
    display flex
    flex-wrap wrap
    a
      flex 1 0 25%
      margin-bottom (-4/$rem)
      img
        width 100%
  
    
</style>

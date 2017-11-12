<template>
  <div class="warnWrap">
    <div class="header">
      <div class="left" @click="delRegister"><</div>
      <div class="middle">提示信息</div>
      <div class="right"><img src="./rect.png"/></div>
    </div>
    <ul class="content">
      <li><img src="./warn.png"/></li>
      <li>登录以后才能操作哦!</li>
      <li>如果没有自动跳转，请手动点击</li>
      <li @click="toDo"><span>立即跳转</span></li>
    </ul>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        Timer:0
      }
    },
    mounted(){
      this.Timer = setTimeout(()=> {
        this.register()
      },1000)
    },
    methods:{
      register(){
        this.$router.push({ path: 'register' })
      },
      delRegister(){
        clearTimeout(this.Timer)
        this.$router.push({ path: 'firstPage' })
      },
      toDo(){
        this.$router.push({ path: 'register' })
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 23.4rem
  .warnWrap
    width 100%
    height 100%
    position relative
    background #F5F5F5
    z-index 100
    .header
      height (40/$rem)
      width 100%
      background white
      div
        float left
      .left
        color  gainsboro
        line-height (40/$rem)
      .middle
        font-size (18/$rem)
        margin-left (120/$rem)
        line-height (40/$rem)
      .right
        height (40/$rem)
        width (40/$rem)
        float right
        padding-right (10/$rem)
        img
          height 100%
          width 100%

    .content
      li
        text-align center

      li:nth-of-type(1)
        margin-top (100/$rem)

      li:nth-of-type(2)
        margin-top (70/$rem)
        font-size (18/$rem)
      li:nth-of-type(3)
        margin-top (40/$rem)
        font-size (16/$rem)
        color #777777
      li:nth-of-type(4)
        margin-top (20/$rem)
        font-size (16/$rem)
        color #777777
        span
          display inline-block
          height (30/$rem)
          width (100/$rem)
          border (1/$rem) solid
          background #F5F5F5
          border-radius (5/$rem)
          line-height (30/$rem)
</style>

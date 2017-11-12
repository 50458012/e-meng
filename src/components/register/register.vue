<template>
  <div class="register">
    <div class="header">
      <div class="zhuCei">
        注册
      </div>
      <div class="selector">
        <p class="putong" @click="toggleChange">
          <span>普通登录</span>
          <i v-if="isShow"></i>
        </p>
        <p class="iPhone"  @click="toggleChange1">
          <span>手机动态密码登录</span>
          <i v-if="!isShow"></i>
        </p>
      </div>
    </div>
    <div class="content">
      <form method="post" id="usually">
        <input type="text" name="username" id="username" placeholder="手机号/邮箱/用户名"/>
        <span ></span>
        <input type="password" name="password" id="password"  placeholder="密码"/>
        <span></span>
        <p class="forgetPW">忘记密码?</p>
        <input id="submit" type="submit" value="登    录">
      </form>
    </div>
    <div class="footer">
      <p>合作网站登录</p>
      <img src="./login_ico4.png"/>
      <img src="./login_ico2.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      toggleChange(){
//        this.isShow = !this.isShow
      }
      ,
      toggleChange1(){
//        this.isShow = !this.isShow
        this.$router.push({ path: 'newClientRegister' })
        window.location.reload()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
  .register
    width 100%
    height 100%
    background white
    position relative
    z-index 101
    .header
      width 100%
      height (180/$rem)
      background url("./registerBg.jpg")
      background-size 100% 100%
      padding 0
      .zhuCei
        padding-top (10/$rem)
        padding-left 86%
        height (20/$rem)
        font-size (18/$rem)
        color white
      .selector
        height (50/$rem)
        width 100%
        background white
        position absolute
        top (130/$rem)
        background  rgba(255,255,255,0.3)
        p
          height (50/$rem)
          width 48%
          text-align center
          display inline-block
          font-size (18/$rem)
          color: white
          line-height (50/$rem)
          position relative
          i
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #fff
            position absolute
            top (40/$rem)
            left (80/$rem)
    .content
      #username
        width 100%
        outline: none
        height (50/$rem)
        color #666
        padding-left (50/$rem)
        background url("./ico3.png") no-repeat
        background-size (20/$rem) (20/$rem)
        background-position (25/$rem) (16/$rem)
      ::-webkit-input-placeholder {
        font-size:15px
        color #D7D7D7
      }
      #password
        width 100%
        outline: none
        height (50/$rem)
        padding-left (50/$rem)
        background url("./ico4.png") no-repeat
        background-size (20/$rem) (20/$rem)
        background-position (25/$rem) (16/$rem)
      ::-webkit-input-placeholder {
        font-size:15px
        color #D7D7D7
      }

      span
        display block
        height 1px
        width 80%
        background black
        margin-left (25/$rem)
        background  #EAEAEA
      .forgetPW
        font-size (14/$rem)
        margin (20/$rem) 0 0 (288/$rem)
        color #898989
      #submit
        width (320/$rem)
        height (42/$rem)
        display block
        margin 10px auto
        border-radius 10px
        background #2EC975
        font-size (15/$rem)
        color white

    .footer
      margin-top (120/$rem)
      font-size (18/$rem)
      text-align center
      color #D7D7D7
      img
        width (60/$rem)
        height  (60/$rem)
        margin-top (20/$rem)
        margin-left (30/$rem)
        &:nth-of-type(2)
          margin-right (180/$rem)
</style>

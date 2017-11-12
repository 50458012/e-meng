<template>
  <header class="header">
    <div class="top">
      <span @click="change(1)">
      <a href="javascript:;"  class="animo">{{animo}} |</a>
      <a href="javascript:;" class="area">{{city}} ▼</a>
      </span>
      <input class="search" type="search" placeholder="搜索商品名和品牌"/>
      <a href="javascript:;" class="anyMore" @click="change(0)"></a>
    </div>
    <div class="bottom" ref="wrap">
        <nav class="nav" ref="list">
          <a v-for="menu in menus" :href="menu.menu_target ||'javascript:;'">{{menu.menu_name}}</a>
        </nav>
      </div>
    <div class="cover" v-show="isShow">
        <header>
          <h5>
            <span class="back" @click="change"></span>
            <span class="apps"></span>
            <span>{{msg}}</span>
          </h5>
        </header>
      <div class="coverContentAll">

        <div class="coverContent1" v-show="title">
          <mtButton @click="update($event)">猫猫站</mtButton>
          <mtButton type="danger">狗狗站</mtButton>
          <mtButton @click="update($event)">水族站</mtButton>
          <h6>当前默认地址：{{city}} {{city}}市</h6>
          <div class="coverContent" @click="updateArea($event)">
            <mtButton size="large">重庆</mtButton>
            <mtButton size="large">北京</mtButton>
            <mtButton size="large">天津</mtButton>
            <mtButton size="large">上海</mtButton>
            <mtButton size="large">河北省</mtButton>
            <mtButton size="large">山西省</mtButton>
            <mtButton size="large">内蒙古自治区</mtButton>
            <mtButton size="large">辽宁省</mtButton>
            <mtButton size="large">吉林省</mtButton>
            <mtButton size="large">黑龙江省</mtButton>
            <mtButton size="large">江苏省</mtButton>
            <mtButton size="large">浙江省</mtButton>
            <mtButton size="large">安徽省</mtButton>
            <mtButton size="large">河南省</mtButton>
            <mtButton size="large">湖北省</mtButton>
            <mtButton size="large">广东省</mtButton>
          </div>
        </div>



          <div class="coverContent2" v-show="!title">
            <ul class="warnContent">
              <li><img src="/static/img/warn.png"/></li>
              <li>登录以后才能操作哦!</li>
              <li>如果没有自动跳转，请手动点击</li>
              <li @click="toDo"><span>立即跳转</span></li>
            </ul>
          </div>
      </div>


    </div>
  </header>
</template>
<script>
import {nav} from '../../tool'
import { Button } from 'mint-ui';
export default {
  components:{mtButton:Button},
  props:["menus"],
  updated( ){
    nav(this.$refs)
  },
  data () {
    return {
      isShow:false,
      title:"",
      animo:'狗狗站',
      city:'重庆'
    }
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
    },
    linkTo(){
      this.$router.push({path:'/mine'})
    },
    change(num){
        this.title = num
      this.isShow = !this.isShow
    },
    update(event){
      this.animo = event.target.children[0].innerHTML
      this.change()
    },
    updateArea(event){
      this.city = event.target.children[0].innerHTML
      this.change()
    }
  },
  computed:{
    msg(){
      return this.title ? '选择收货地址':'提示信息'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.header
  position absolute
  z-index 5
  background-color: #fff
  top 0
  left 0
  width: 100%
  height (86/$rem)
  font-size (14/$rem)
  padding-bottom (3/$rem)
  .top
    width: 100%
    box-sizing border-box
    padding (13/$rem) (10/$rem)
    .anyMore
      display inline-block
      width (25/$rem)
      height (25/$rem)
      background url("/static/img/more.png")
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

  .cover
    position fixed
    z-index 5
    background-color: #fff
    top 0
    left 0
    bottom 0
    right 0
    header
      box-sizing border-box
      padding (10/$rem)
      width 100%
      h5
        width 100%
        height (50/$rem)
        text-align center
        line-height (30/$rem)
        color #333
        font-size (18/$rem)
        .back
          float left
          margin (5/$rem) 0 (16/$rem)
          width (11/$rem)
          height (18/$rem)
          background url("/static/img/img.png") no-repeat
          background-size 1800%
          background-position 91% 7%
        .apps
          float right
          margin (4/$rem) 0 (17/$rem)
          background url("/static/img/img.png") no-repeat
          background-size 1400%
          background-position 100% 7%
          width (17/$rem)
          height (18/$rem)

      .mint-button
        width (95/$rem)
        height (45/$rem)
        margin 0 (10/$rem)
    .coverContentAll
      .coverContent1
        h6
          box-sizing border-box
          padding (10/$rem)
          width 100%
          height (45/$rem)
          line-height 1.5
          background-color: #ffe6d9
          font-size (14/$rem)
      .coverContent2
        .warnContent
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

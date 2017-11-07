<template>
  <header class="header">
    <div class="top">
      <span @click="change">
      <a href="javascript:;"  class="animo">{{animo}} |</a>
      <a href="javascript:;" class="area">{{city}} ▼</a>
      </span>
      <input class="search" type="search" placeholder="搜索商品名和品牌"/>
      <a href="javascript:;" class="anyMore"></a>
    </div>
    <div class="bottom" ref="wrap">
        <nav class="nav" ref="list">
          <a v-for="menu in menus" :href="menu.menu_target">{{menu.menu_name}}</a>
        </nav>
      </div>
    <div class="cover" v-show="isShow">
        <header>
          <h5>
            <span class="back" @click="change"></span>
            <span class="apps"></span>
            <span>选择收货地址</span>
          </h5>
          <Button @click="update($event)">猫猫站</Button>
          <Button type="danger" @click="update($event)">狗狗站</Button>
          <Button @click="update($event)">水族站</Button>
        </header>
      <h6>当前默认地址：{{city}} {{city}}市</h6>
      <div class="content" @click="updateArea($event)">
            <Button size="large">重庆</Button>
            <Button size="large">北京</Button>
            <Button size="large">天津</Button>
            <Button size="large">上海</Button>
            <Button size="large">河北省</Button>
            <Button size="large">山西省</Button>
            <Button size="large">内蒙古自治区</Button>
            <Button size="large">辽宁省</Button>
            <Button size="large">吉林省</Button>
            <Button size="large">黑龙江省</Button>
            <Button size="large">江苏省</Button>
            <Button size="large">浙江省</Button>
            <Button size="large">安徽省</Button>
            <Button size="large">河南省</Button>
            <Button size="large">湖北省</Button>
            <Button size="large">广东省</Button>
        </div>
    </div>
  </header>
</template>
<script>
import {nav} from '../tool'
import { Button } from 'mint-ui';
export default {
  components:{Button},
  props:["menus"],
  updated( ){
    nav(this.$refs)
  },
  data () {
    return {
      isShow:false,
      animo:'狗狗站',
      city:'重庆'
    }
  },
  methods:{
    change(){
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
    h6
      box-sizing border-box
      padding (10/$rem)
      width 100%
      height (45/$rem)
      line-height 1.5
      background-color: #ffe6d9
      font-size (14/$rem)
  .content
      .area
        width 100%
</style>

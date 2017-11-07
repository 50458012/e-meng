<template>
  <div class="content" v-if="datas">
    <img :src="datas[0].value[0].image" alt="" class="titleImg1">
    <baner :baner="datas[1].value"></baner>
    <img :src="datas[2].value[0].image" :alt="datas[2].type_name" class="mainImg">
    <nav class="mainNav">
      <a v-for="item in datas[3].menus" :href="item.target.param"><img :src="item.image" alt="item.name"></a>
    </nav>
    <div class="zhe">
      <a :href="datas[4].value[0].target.param">
        <img :src="datas[4].value[0].image" :alt="datas[4].type_name">
      </a>
      <a :href="datas[5].value[0].target.param">
        <img :src="datas[5].value[0].image" :alt="datas[5].type_name">
      </a>
    </div>
    <qiangList :list="datas[16]"></qiangList>
    <div class="guangGao1">
      <img :src="datas[7].value[0].image" :alt="datas[7].type_name">
    </div>
    <list :goods="datas[8]"></list>
    <div class="guangGao2">
      <a :href="datas[4].value[0].target.param">
        <img :src="datas[9].value[0].image" :alt="datas[9].type_name">
      </a>
    </div>
    <div class="dapai">
      <img class="dapaiTitle":src="datas[10].value[0].image" :alt="datas[10].type_name">
      <dapai :seller="datas[11]"></dapai>
      <dapai :seller="datas[12]"></dapai>
    </div>
    <div class="bottom">
      <div class="teseTitle">
        <img :src="datas[13].image">
      </div>
      <ul class="lanMu">
        <li v-for="item in datas[14]">
          <a :href="item.param">
            <img :src="item.image">
          </a>
        </li>
      </ul>
      <div class="endMV">
        <h3 class="title-3">
          <span>E宠狂欢节 11.9-11.11等你来购</span>
        </h3>
        <video :src="datas[15].video.url"
               :poster="datas[15].image" controls
               
        ></video>
      </div>
      <div class="about">
        <h5>
          <a href="javascript:;">触屏版</a>
          <a href="javascript:;">手机客户端</a>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">联系我们</a>
        </h5>
        <h6>© wap.epet.com 版权：重庆易宠科技有限公司</h6>
      </div>
    </div>
  </div>
</template>

<script>
  import baner from './baner/baner.vue'
  import list from './list/list.vue'
  import dapai from './list/dapai.vue'
  import qiangList from './list/fengqiang.vue'

export default {
    props:{datas:Array},
    components:{baner,list,qiangList,dapai},
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
  .zhe
    width 100%
    img
      width 100%
      margin-bottom (-4/$rem)
  .guangGao1
    img
      width 100%
      height (62.5/$rem)
      margin-bottom (-3/$rem)
  .guangGao2
    img
      width (375/$rem)
      margin-bottom (-3/$rem)
  .dapai
    width 100%
    background-color: #f24865
    .dapaiTitle
      width 100%
      margin-bottom (-3/$rem)
  .bottom
    width 100%
    .teseTitle
      img
        width (375/$rem)
        margin-bottom (-3/$rem)
    .lanMu
      width 100%
      display flex
      flex-wrap wrap
      background-color: #f24865
      li
        flex 1 0 50%
        margin-bottom (3/$rem)
        &:nth-of-type(3)
          transform translateY((5/$rem)) scaleX(.98)
        &:nth-of-type(2)
          transform scaleY(.97) translateY((3/$rem))
        &:nth-of-type(5)
          transform scaleY(.95) translateY((-2/$rem))
        a
          display inline-block
          width 100%
          img
            width 100%
            vertical-align bottom
            height (99/$rem)
    .endMV
      margin-top (-1/$rem)
      width 100%
      background-color: #f24865
      padding (35/$rem) 0
      .title-3
        width 75%
        height (20/$rem)
        line-height (20/$rem)
        border-radius (8/$rem)
        margin 0 auto (20/$rem)
        text-align center
        color #fff
        font-size (18/$rem)
        border-left  (2/$rem) dotted #fff
        border-right  (2/$rem) dotted #fff
        span
          border-radius (15/$rem)
          padding 0 (10/$rem)
          border-left  (2/$rem) dotted #fff
          border-right  (2/$rem) dotted #fff
      video
        width 100%
        height (235/$rem)
    .about
      padding (10/$rem) 0 (30/$rem)
      text-align center
      h5
        margin-bottom (10/$rem)
        a
          font-size (16/$rem)
          &:first-child
            color red
      h6
        font-size (12/$rem)
</style>

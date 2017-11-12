<template>
        <div class="tabWrap">
          <div class="tabHead">
            <mt-navbar v-model="sele" >
              <mt-tab-item id="1">分类</mt-tab-item>
              <mt-tab-item id="2">品牌</mt-tab-item>
            </mt-navbar>
          </div>
          <div class="TabContent">
            <mt-tab-container v-model="sele" >
              <mt-tab-container-item id="1">
                <div class="TabListWrap">
                  <ul class="TabList-left">
                    <li v-for="(item,index) in list" :index="index" @click="handle(index,$event)" :class="{'active':index===cheackedNum}">{{item.name}} </li>
                  </ul>
                  <div class="TabList-right">
                    <h6><a class="more" href="https://wap.epet.com/goodslist.html?extend_pam=cateid:5&fw=0">全部商品 ▶</a><span class="title">{{activeItem.name}}</span></h6>
                    <ul class="tab-list">
                      <li v-for="(v,i) in names" >
                        <img :src="`/static/img/listImg/${activeItem.title}/${activeItem.title}${i}.jpg`" >
                        <p class="goodName">{{v}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
                <div class="pinpai">
                  <h3>海外品牌</h3>
                  <dapai :seller="sellers[0]"></dapai>
                </div>
                <div class="pinpai">
                  <h3>国内品牌</h3>
                  <dapai :seller="sellers[1]"></dapai>
                </div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
        </div>
</template>

<script>
  import dapai from '../../components/home/content/dapai.vue'
  import  Vue from 'vue'
  import { Navbar, TabItem } from 'mint-ui';
  import { TabContainer, TabContainerItem } from 'mint-ui';
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
      export default {
        data() {

          return {
            sele :"1",
            cheackedNum:0,
            list:[
              {name:'为您推荐',isChecked:true,title:'bj'},
              {name:'狗狗主粮',isChecked:false,title:'jk'},
              {name:'狗狗零食',isChecked:false,title:'ls'},
              {name:'狗狗服饰',isChecked:false,title:'sh'},
              {name:'狗狗窝垫',isChecked:false,title:'zl'},
              {name:'狗狗生活',isChecked:false,title:'bj'},
              {name:'狗狗玩具',isChecked:false,title:'jk'},
              {name:'狗狗保健',isChecked:false,title:'ls'},
              {name:'狗狗医疗',isChecked:false,title:'sh'},
              {name:'狗狗牵引',isChecked:false,title:'zl'},
              {name:'狗狗美容',isChecked:false,title:'jk'},
              {name:'狗狗周边',isChecked:false,title:'bj'},
              {name:'狗狗清洁',isChecked:false,title:'sh'}
            ],
            names:["天衡宝成犬粮","渴望幼犬粮","卡比全犬粮","福摩全犬粮","牛油果全犬粮", "生鲜幼犬粮","荒野盛宴全犬","维采全犬粮"],
            sellers:[
              [
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/c025a960a708689cef8f19e241475a23.jpg@!water",
                  "param": "https://sale.epet.com/m/mould/activity/ztMjg0OA%3D%3D.html?tid=2848"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/27/13/cb243a519b39a07ef78c4810e06d4a1d.jpg@!water",
                  "param": "http://sale.epetht.com/m/mould/activity/ztMjQ5Mw%3D%3D.html?tid=2493"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/4ee4b4cab20fe49a55b12ea79514b9e8.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg0MA%3D%3D.html?tid=2840"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/ed6595187a5ef993e13c5856abcff618.jpg@!water",
                  "param": ""
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/41ed775e396997ca49c1bdc1900ce726.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjgzMg%3D%3D.html?tid=2832"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/6e64519b3b74e3a1427674b68d313b91.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg1MA%3D%3D.html?tid=2850"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/097dbde2dd62eb41ec79b2fb823da742.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjgzMw%3D%3D.html?tid=2833"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/79166469195f87e2c843cf95c112f03c.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg2Mg%3D%3D.html?tid=2862"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/54d0444397fc705ecdeecd7ce7683fe7.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjgyNg%3D%3D.html?tid=2826"
                }
              ],
              [
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/3f7584c573b83f3cf6b63c07c465d4d4.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg2Mw%3D%3D.html?tid=2863"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/171edefa51617b72e7a93646dd9cdc2d.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg2Ng%3D%3D.html?tid=2866"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/5e74f9a98c5be5b25f1823a6675edaa4.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjgyNQ%3D%3D.html?tid=2825"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/c3a9f5282494bf4bea2c0b8b0d3d1a93.jpg@!water",
                  "param": ""
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/f85c8ef66c9c1032d8881080f351079a.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjgyOA%3D%3D.html?tid=2828"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/9ecd9c55d658f5b92d447daf689e0cc4.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjgyNw%3D%3D.html?tid=2827"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/71cf2b25a1c3e7cf101a8ffb19b274d0.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg2NQ%3D%3D.html?tid=2865"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/4eb8b195d2e37d459c50a6bfedc7c655.jpg@!water",
                  "param": "https://sale.epet.com/m/mould/activity/ztMjg0Ng%3D%3D.html?tid=2846"
                },
                {
                  "image": "https://img2.epetbar.com/nowater/2017-10/25/13/a69c21e13862cbfebf2dbafd7e1e85d6.jpg@!water",
                  "param": "http://sale.epet.com/m/mould/activity/ztMjg0NA%3D%3D.html?tid=2844"
                }
              ]
            ]
          }
        },
        components:{dapai},
            methods:{
              handle(index){
                
                if (index === this.cheackedNum) {
                    return
                }
                this.list[index].ischeacked = true,
                this.list[this.cheackedNum].ischeacked = false
                  this.cheackedNum = index
              }
            },
            computed:{
              activeItem(){
                return this.list[this.cheackedNum]
              }
            }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
$rem = 37.5rem
.tabWrap
  position relative
  width 100%
  height 100%
  padding (55/$rem) 0
  .tabHead
    width 46%
    height (49/$rem)
    position fixed
    background-color: #fff
    z-index 3
    top 0
    left 0
    padding 0 (100/$rem)
    .mint-tab-item.is-selected
      border-bottom (2/$rem) solid #ed4044
      color #ed4044
  .TabContent
    width 100%
    background-color: #eee
    .TabListWrap
      width 100%
      height 100%
      display flex
      .TabList-left
        width 20%
        margin-right (10/$rem)
        background-color: #fff
        li
          width 100%
          height (20/$rem)
          padding (15/$rem) 0
          border-bottom (1/$rem) solid #eee
          text-align center
          font-size (13/$rem)
          &.active
            color #ed4044
            background-color: #eee
      .TabList-right
        width 65%
        padding (20/$rem)
        background-color: #fff
        h6
          font-size (14/$rem)
          color #aaa
          margin-bottom (10/$rem)
          .more
            float right
            color #aaa
            font-size (12/$rem)
            margin-top (3/$rem)
      .tab-list
        display flex
        width 100%
        flex-wrap wrap
        li
          width 45%
          margin  0 2% 10%
          img
            width 100%
          .goodName
            text-align center
            font-size (13/$rem)
    .pinpai
      background-color: #f24865
      border-radius (10/$rem)
      margin (10/$rem) 0
      h3
        height (30/$rem)
        line-height (30/$rem)
        text-align center
        color #fff
        font-size (15/$rem)
</style>

<template>
           <ul class="list">
             <li v-if="goods" v-for="(good,index) in goods">
               <a href="javascript:;">
                 <!--:src="good.img"-->
                 <img src="../../img/listImg/baojin/bj-1.jpg">
                <p class="name">{{good.name}}</p>
                 <p class="price">
                   <span class="newPrice">￥{{good.newPrice}}</span>
                   <span class="oldPrice">￥{{good.oldPrice}}</span>
                 </p>
               </a>
             </li>
           </ul>
</template>

<script>


  export default {
    created(){
      let names = ['路斯牛肉粒3盒','Smajkl洁齿骨','顽皮牛肉棒4袋','纽翠宝6罐','宝路洁齿棒12袋','牙口牙乐口腔清洁','顽皮鸡肉丝2袋','渔极6罐*390g']
      let goods = []
      names.forEach((name,index)=>{
      let newPrice = Math.round(Math.random()*30+30)
      let oldPrice = Math.round(Math.random()*50+30)
        goods[index] = {
        name,
        newPrice,
        oldPrice,
      }

    })
      this.goods = goods
    },
            data() {
                  return {
                    goods:[]
                  }
            }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.list
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  li
    width 25%
    box-sizing border-box
    text-align center
    img
      width 100%
    .name
      font-size (11/$rem)
    .price
      .newPrice
        font-size (16/$rem)
        vertical-align top
        line-height 2
        color red
      .oldPrice
        font-size (13/$rem)
        vertical-align top
        line-height 2.5
        text-decoration line-through
</style>

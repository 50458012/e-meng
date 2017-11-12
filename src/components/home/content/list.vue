<template>
  <ul class="goods-list">
    <li class="goods" v-for="good in goods">
      <h3 :style="{
      'background':`url(./static/img/listImg/${good.name}/${good.name}title.jpg) no-repeat`,
      'background-size' : '100% 100%' }" >{{good.title}}</h3>
      <ul class="list">
        <li v-for="(item,index) in good.value">
          <a :href="good.target">
            <img :src="`./static/img/listImg/${good.name}/${good.name}${index}.jpg`">
            <p class="name">{{item}}</p>
            <p class="price">
              <span class="newPrice">￥{{Math.round(Math.random()*30+30)}}</span>
              <span class="oldPrice">￥{{Math.round(Math.random()*50+30)}}</span>
            </p>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>


  export default {
    props:{
      goods:Array
    },
            data() {
                  return {
                  }
            }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
  .goods-list
    width 100%
    .goods
      border-bottom (10/$rem) solid #f24865
      width 100%
      h3
        width 100%
        height (50/$rem)
        font bold (16/$rem)  '微软雅黑'
        line-height 4.5
        text-indent (20/$rem)
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
              color #888
              vertical-align top
              line-height 2.5
              text-decoration line-through
</style>

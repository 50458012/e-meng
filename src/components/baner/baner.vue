<template>
        <div>
          <Swipe class="swipe" :auto="4000">
            <SwipeItem v-for="(item,index) in baner" :key="index">
              <a class="swipeItem" :href="item.target.param"> <img :src="item.image"></a>
            </SwipeItem>
          </Swipe>
        </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';

      export default {
        props:{baner:Array},
            data() {
                  return {}
            },
            components:{Swipe,SwipeItem}
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  $rem = 37.5rem
.swipe
  width (375/$rem)
  height (160/$rem)
  font-size 0
  margin-bottom (-0.5/$rem)
  .mint-swipe-indicator
    border-radius  (4/$rem)
    opacity 1
    width (8/$rem)
    transition .3s width
    background-color: #fff
    &.is-active
      width (16/$rem)
  .swipeItem
    width (375/$rem)
    height (160/$rem)
    img
      width 100%
</style>

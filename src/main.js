import {rem} from './components/tool'
rem()
import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* eslint-disable no-new */
import './mock/mockData'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})


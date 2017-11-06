
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
/* eslint-disable no-new */
import './mock/mockData'
import {rem} from './tool'
rem()

new Vue({
  el: '#app',
  // router,
  render:h=>h(App)
})


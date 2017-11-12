import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import classify from '../components/classify/classify.vue'
import mine from '../components/mine/mine.vue'
import shopCart from '../components/shopCart/shopCart.vue'
import register from '../components/register/register.vue'
import newClientRegister from '../components/register/newClientRegister.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: home},
    {path: '/classify',component: classify},
    {path: '/mine',component: mine},
    {path: '/shopCart',component: shopCart},
    {path: '/register',component: register},
    {path: '/newClientRegister',component: newClientRegister}
  ]
})

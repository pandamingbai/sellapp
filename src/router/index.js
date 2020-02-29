import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes : [
   {
     path: '/',name:'Main',component: Main,
  children:[
    {path:'/goods',name:'goods',component:() => import('../views/Goods')},
    {path:'/evaluate',name:'evaluate',component:() => import('../views/Evaluate')},
    {path:'/merchant',name:'merchant',component:() => import('../views/Merchant')},
  
  
  ]},
]
})
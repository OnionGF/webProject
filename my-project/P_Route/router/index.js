import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import AppMain from '@/components/AppMain'
import AppNews from '@/components/AppNews'

Vue.use(Router)

//注册路由表
const routes = [
  {path:'/main',component:AppMain,name:'main'},
  {path:'/news',component:AppNews,name:'news'}
]

const router = new Router({
    routes
})

export default router

// const app = new Vue({
//   router
// }).$mount('#app')



import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import AppMain from '../components/main/AppMain.vue'
import AppMovie from '../components/movie/AppMovie.vue'
import AppCinema from '../components/cinema/AppCinema.vue'
import AppStore from '../components/store/AppStore.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppSell from '../components/sell/AppSell.vue'

 const routes = [
    {path:'',redirect:'/main'},  //重定向，为空的时候进入到main文件里
    {path:'/main',name:'main',component:AppMain},
    {path:'/movie',name:'movie',component:AppMovie},
    {path:'/cinema',name:'cinema',component:AppCinema},
    {path:'/store',name:'store',component:AppStore},
    {path:'/mine',name:'mine',component:AppMine},
    {path:'/sell',name:'sell',component:AppSell},
    {path:'**',redirect:'/main'}
 ]
     
  

export default new Router({
      routes
})

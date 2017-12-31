import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import index from '@/components/index/index.vue'
import order from '@/components/order/order.vue'
import or1 from '@/components/order/or1.vue'
import or2  from '@/components/order/or2.vue'
import or3  from '@/components/order/or3.vue'
import or4 from '@/components/order/or4.vue'
import or5 from '@/components/order/or5.vue'
import mine from '@/components/mine/mine.vue'
import tracks from '@/components/track/tracks.vue'
import collect from '@/components/collect/collect.vue'
import tag1 from '@/components/collect/tag-1.vue'
import tag2 from '@/components/collect/tag-2.vue'


 const routes = [
    {path:'',redirect:'/mains'},  //重定向，为空的时候进入到main文件里
    {path:'/mains',name:'mains',component:index},
    {path:'/tracks',name:'tracks',component:tracks},
    {path:'/collect',name:'collect',component:collect,children:[
      // {path:'',component:AppNewsInside},
      {path:'',redirect:'tag1',name:'tag1'},
      {path:'/tag1',component:tag1,name:'tag1'},
      {path:'/tag2',component:tag2,name:'tag2'}
      // {path:'outside',component:AppNewsOutside,name:'outside'},
      // {path:'detail/:id',component:AppNewsDetail,name:'detail',props:true}
    ]},
    {path:'/order',name:'order',component:order,children:[
      {path:'',redirect:'or1',name:'or1'},
      {path:'/or1',component:or1,name:'or1'},
      {path:'/or2',component:or2,name:'or2'},
      {path:'/or3',component:or3,name:'or3'},
      {path:'/or4',component:or4,name:'or4'},
      {path:'/or5',component:or5,name:'or5'}
    ]},
    {path:'/mine',name:'mine',component:mine},
    {path:'**',redirect:'/mains'}
 ]
     
  

export default new Router({
      routes
})

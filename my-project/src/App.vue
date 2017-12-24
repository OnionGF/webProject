<template>
  <div id="app">
      <AppHeader :toggleNav='toggleNav'></AppHeader>
      <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
        <app-nav :toggleNav = 'toggleNav' v-if='isNavShow'></app-nav>
      </transition>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="mask" v-if='isNavShow' @click="toggleNav"></div>
      </transition>
      <router-view></router-view>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <app-top></app-top>
      </transition>
  </div>
</template>

<script>

      import AppHeader from  './components/header/AppHeader'
      import AppNav from  './components/nav/AppNav'
      import AppTop from  './components/top/AppTop'
      
      export default{

         name:'app',
         data:function(){
             return {
                 isNavShow:false
             }
         },
         methods:{
             toggleNav(){
                 this.isNavShow = !this.isNavShow;
             }
         },
         components:{
             AppHeader,AppNav,AppTop
         }
       
      }
</script>



   <style lang="scss">
         @import './styles/app.scss';

         .mask{
             width:100%;
             height:100%;
             background:rgba(0,0,0,0.2);
             position:fixed;
             left:0;
             top:0;
             z-index:498;
             animation-duration: 0.5s;
         }
   </style>
   


<template>
  <div id="app">
    <app-header @toggle-select="toggleSelect" :toggleInsertBox='toggleInsertBox'></app-header>
    <app-content :isSelect='isSelect' :toggleInsertBox='toggleInsertBox'></app-content>

    <transition-group enter-active-class='animated bounceInUp'  leave-active-class='animated bounceOutDown'>
         <AppControlNav :toggleSelect='toggleSelect' key="control" v-if="isSelect"></AppControlNav>
        <AppTypeNav key="type" v-else></AppTypeNav>
    </transition-group>
   
    <transition enter-active-class='animated fadeIn'  leave-active-class='animated fadeOut'>   
      <AppInsertBox v-if='isInsertShow' :toggleInsertBox='toggleInsertBox'></AppInsertBox>
    </transition>
  </div>
</template>

<script>
      import AppHeader from './components/AppHeader'
      import AppContent from './components/AppContent'
      import AppTypeNav from './components/AppTypeNav'
      import AppControlNav from './components/AppControlNav'
      import AppInsertBox from './components/AppInsertBox'
      export default{

         name:'app',
         data:function(){
            return {
                isInsertShow:false,
                isSelect:false
                }
         },
         methods:{
            toggleInsertBox(){
            this.isInsertShow = !this.isInsertShow
            },
            toggleSelect(){
                this.isSelect = !this.isSelect
            }
        },
         components:{
           AppHeader,AppContent,AppTypeNav,AppInsertBox,AppControlNav
         }

      }
</script>

<style>

.todo-content.card-content-inner{

    width:80%;
    height: 5rem;
}

.card-content.todo-card{
    display: flex;
} 

.card-content.todo-card .control-box{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}


.finished{
    border:1px solid rgb(42, 218, 56);
}


.content{
    padding-bottom: 2.5rem;
}


nav.bar{
    display: flex;justify-content: space-around;
    background: none;align-items: center;
    border: none;box-shadow: none;
}

.circle{
    width: 2rem;height: 2rem;border-radius: 50%;text-align: center;line-height: 2rem;
    color: #fff;
    font-size: 10px;
    transition: all 0.3s;
}
.circle.all{
    background: #fff;
    color:rgb(21, 104, 212);
    border:1px solid rgb(21, 104, 212);
}
.circle.all.active{
    border:none;
    background: rgb(21, 104, 212);
    color: #fff;
}
.circle.unfinish{
    background: #fff;
    color:rgb(216, 39, 33);
    border:1px solid rgb(216, 39, 33);
}
.circle.unfinish.active{
    border:none;
    background: rgb(216, 39, 33);
    color: #fff;
}
.circle.finish{
    background: #fff;
    color:rgb(21, 212, 53);
    border:1px solid rgb(21, 212, 53);
}
.circle.finish.active{
    border:none;
    background: rgb(21, 212, 53);
    color: #fff;
}

.mask{
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(0,0,0,0.2);
    display: flex;justify-content: center;align-items: center;
}

.insert-box{
    width: 70%;
    height: 15rem;
    background: #fff;
    border-radius: 0.5rem;
    display: flex;flex-direction: column;align-items: center;justify-content: space-around;
}
.insert-box textarea{
    width: 80%;
    height: 50%;
    border: 1px solid rgb(224, 224, 224);
}

.insert-box .btn-box{
    width: 70%;
    display: flex;justify-content: space-around;
}




.card.normal .todo-card{
    width: 100%;
}
.card.normal .check-box{
    display: none;
}

.select.card{
    display: flex;align-items: center;
}
.select.card .todo-card{
    width: 90%;
} 
.check-box{
    
    width: 10%;
    display: flex;justify-content: center;align-items: center;
}
</style>

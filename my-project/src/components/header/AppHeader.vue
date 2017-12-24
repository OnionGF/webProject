<template>
    <div class="app-header">
       <div class="nav square" @click="toggleNav">
            <i class="fa fa-navicon"></i>
        </div>
        <div class="info-box">
           <div class="title" @click='toggleNav'>卖座电影</div> 
           <div class="info">
               <div class="city">
                   北京 <i class="fa fa-sort-down"></i>
               </div>
           </div>
        </div>
        <div class="user square">
            <i class="fa fa-user-circle"></i>
        </div>
    </div>
</template>


<script>
    export default {
        name : 'app-header',
        props:['toggleNav']
    }
</script>


<style lang="scss">
     .app-header{
        background: #282828;
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        left: 0;
        width: auto;
        height: 0.5rem;
        line-height: 0.5rem;
        overflow: hidden;
        color:#999;
        display: flex;
        font-size:14px;

        justify-content: space-between;
        .square{
            width:0.5rem;
            height: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .info-box{
            display:flex;
            flex-grow:1;
            justify-content: space-between;
            padding-left:0.3rem;
            .title{
                color:aliceblue
            }

        }
        .nav{
            border-right: 1px solid #222;
            box-shadow: 1px 0 1px #363636;
        }

     }   
</style>

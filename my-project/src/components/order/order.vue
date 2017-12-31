

<template>
    <div class="home">
        <p class='title'>订单</p>
        <div class="nav">          
            <router-link to="/or1" >全部</router-link>
            <router-link to="/or2" >待付款</router-link>
            <router-link to="/or3" >待使用</router-link>
            <router-link to="/or4" >待评价</router-link>
            <router-link to="/or5" >退款/售后</router-link>
        </div>
       
        <router-view></router-view>
            
      
    </div>
</template>


<script>
    export default {
        name:'order',
        data:function(){
            return {

            }
        }
    }
</script>

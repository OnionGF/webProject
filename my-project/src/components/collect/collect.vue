

<template>
    <div class="home">
        <p class='title'>收藏</p>
        <div class="nav">
           
            
            <router-link to="/tag1" class="navl">我的收藏</router-link>
            <router-link to="/tag2" class="nav2">浏览记录</router-link>
        </div>
       
        <router-view></router-view>
            
      
    </div>
</template>


<script>
    export default {
        name:'collect',
        data:function(){
            return {

            }
        }
    }
</script>

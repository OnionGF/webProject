<template>
    <div id="app">
        <p>header：</p>
        <router-link to='/main'>main</router-link>
        <router-link to='/news'>news</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
     
      export default{
        name:'app',
        data:function(){
            return {

            }
        }
      }
</script>

<style>


</style>

<template>
    <div class="container">
        <router-view></router-view>
       
        
        
        <foots></foots> 
    </div>
</template>



<script>
import foots from './components/footer/foot.vue'
export default {
    name :'app',
    components:{
        foots
    }
}
</script>

<style lang="scss">
 
</style>

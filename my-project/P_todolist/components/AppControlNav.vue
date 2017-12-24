<template>
    <nav class="bar bar-tab app-control-nav">
        <div @click='controlSelected(1)' :class="['circle','all active']" >F</div>
        <div @click='controlSelected(2)' :class="['circle','finish active']" >U</div>
        <div @click='controlSelected(3)' :class="['circle','unfinish active']" >R</div>
        <div @click="toggleSelect" :class="['circle','all active']" >取消</div>
    </nav>
    
</template>

<script>
import bus from '../modules/bus'
export default {
    name:'app-control-nav',
    props:['toggleSelect'],
    data(){
        return {
         
        }
    },
    methods:{
        controlSelected(type){
            bus.$emit('control-selected-todo',type)
        }
    }
}

</script>

<style scoped>
   
</style>
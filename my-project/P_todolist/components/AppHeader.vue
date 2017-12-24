
<template>
    <header class="bar bar-nav app-header">
        <a  @click="toggleSelect" class="icon icon-left pull-left"></a>
        <a  @click='toggleInsertBox' class="icon icon-edit pull-right"></a>
        <h1 class="title">ToDoList</h1>
    </header>
</template>

<script>
      export default{

         name:'app-header',
         props:['toggleInsertBox'],
         data(){
             return {
                 
             }
         },
         methods:{
            toggleSelect(){
                this.$emit('toggle-select')
            }
        }

      }
</script>

<style scoped>

</style>
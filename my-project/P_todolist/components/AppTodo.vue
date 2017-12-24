
<template>
  <div class="card app-todo "  :class="{finished:todo.isFinished}" >
        <div class="check-box">
            <input type="checkbox" v-model="todo.isSelected" >
        </div>
        
        <div class="card-content todo-card">
            <div class="card-content-inner todo-content">{{todo.content}}</div>
            <div class="control-box">

                <button @click='finish(todo.id)' :class="{'button-fill':todo.isFinished}" class="button button-small button-success"><span class="icon icon-check"></span></button>

                <button   @click='remove(todo.id)' class="button button-fill button-small button-danger"><span class="icon icon-remove"></span></button>
            </div>
        </div>
    </div>
</template>

<script>
       import bus from '../modules/bus.js'

      export default{

         name:'app-todo',
         props:['todo','finish','remove'],
        

      }
</script>

<style scoped>
    .finished{
    border:1px solid rgb(42, 218, 56);
}
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

</style>
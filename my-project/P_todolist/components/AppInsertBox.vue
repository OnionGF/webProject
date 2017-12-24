<template>
    <div class="mask app-insert-box">
        <div class="insert-box">
            <textarea v-model='content'></textarea>

            <div class="btn-box">
                <button @click='addNewTodo' class="button button-fill button-success">完成</button>
                <button @click='toggleInsertBox' class="button button-fill button-danger">取消</button>
            </div>
            
        </div>

    </div> 
</template>

<script>
import bus from '../modules/bus'
export default {
    name:'app-insert-box',
    props:{
       toggleInsertBox:Function
    },
    data(){
        return {
          content:''
        }
    },methods:{
        addNewTodo(){
            bus.$emit('add-new-todo',this.content)
            this.content = ''
        }
    }
}

</script>

<style scoped>
   
</style>
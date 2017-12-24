
<template>
   <div class="content app-content">      
        <p v-if="todos.length==0">空空如也，快来添加一条吧</p> 
        <AppTodo :key="todo.id" v-for='todo in showTodos' :todo='todo' :class='{normal:!isSelect,select:isSelect}' :isSelect='isSelect' :finish='finish' :remove='remove'></AppTodo>
    </div>
</template>

<script>

    import AppTodo from './AppTodo'
    import bus from '../modules/bus.js'

      export default{

         name:'app-content',
         props:['toggleInsertBox','isSelect'],
         data(){
             return {
            aaa:JSON.parse(localStorage.todos?localStorage.todos:'[]').length,//在新增todo的时候，创建id时候用的（自增）
            //所有的todos,
            todos:JSON.parse(localStorage.todos?localStorage.todos:'[]'),          
           showType:'all',//页面中显示的类型 all所有的todo finish 完成的todo unfinish 未完成的todo
           
        }
         },
         components:{
             AppTodo
         },
           methods:{
                addNewTodo:function (content) {//添加新todo
                    this.aaa++;//id自增
                    this.todos.push({//给全部todos中新增一条
                        id:this.aaa,
                        content,
                        isFinished:false,
                        isSelected:false
                    })
                    //让弹出层消失
                    this.toggleInsertBox()
                    // this.updateStorage()
                },
                finish:function (id) {//完成一个todo
                    this.todos.forEach((todo)=>{
                        if(todo.id==id){
                            todo.isFinished=!todo.isFinished
                        }
                    })
                    // this.updateStorage()
                },
                remove:function (id) {//删除一个todo
                    for (let i = 0; i < this.todos.length; i++) {
                        if(this.todos[i].id==id){
                            this.todos.splice(i,1)
                        }
                        
                    }
                    // this.updateStorage()
                },
                    controlSelected(type){//控制选择的todo，1：完成选中的，2 未完成选择的 3.移除选择的
                    
                    if(type==3){
                        
                        var arr = []
                        this.todos.forEach((todo)=>{
                            if(!todo.isSelected){
                                arr.push(todo)
                            }
                        })
                        this.todos = arr

                        return ;
                    }
                    this.todos.forEach((todo)=>{
                        if(todo.isSelected){
                            todo.isFinished = type==1?true:false
                            
                        }
                    })
                    // this.updateStorage()
                },
                updateStorage(){
                    localStorage.todos = JSON.stringify(this.todos)
                }
                },
          computed:{
                finishTodos:function () {//根据所有的todos生成一个新数据，这个数据里全部都是完成的todo
                    var arr = []
                    this.todos.forEach((todo) => {
                        if(todo.isFinished){
                            arr.push(todo)
                        }
                    });
                    return arr
                },
                unfinishTodos:function () {//根据所有的todos生成一个新数据，这个数据里全部都是未完成的todo
                    var arr = []
                    this.todos.forEach((todo) => {
                        if(!todo.isFinished){
                            arr.push(todo)
                        }
                    });
                    return arr
                },
                showTodos:function () {//在页面中可能会显示三种类型，由showType数据来控制，这个就是真正显示在页面中的todos
                    switch(this.showType){
                        case 'all':return this.todos;break;
                        case 'finish':return this.finishTodos;break;
                        case 'unfinish':return this.unfinishTodos;break;
                        default : return this.todos;break;
                    }
                }
            },
            mounted(){
                bus.$on('change-type',function(type){
                    this.showType = type
                }.bind(this))
                bus.$on('add-new-todo',function (content) {
                    this.addNewTodo(content) 
                }.bind(this))
                bus.$on("control-selected-todo",function (type) {
                    this.controlSelected(type)
                }.bind(this))
                    }

      }
</script>

<style scoped>

.content{
    padding-bottom: 2.5rem;
}

</style>
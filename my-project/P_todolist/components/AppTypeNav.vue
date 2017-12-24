
<template>
    <nav class="bar bar-tab app-type-nav" >
        <div @click='changeType(_type.type)' :key='_type.type' v-for='_type in types' :class="['circle',_type.type,type==_type.type?'active':'']" >{{_type.content}}</div>
    </nav>
</template>

<script>
    import bus from '../modules/bus.js'

      export default{

         name:'app-type-nav',
         data(){
             return {
                types:[//准备循环页面底部类型按钮的数据
                {type:'all',content:'A'},
                {type:'finish',content:'F'},
                {type:'unfinish',content:'U'},
            ],
                 type:'all'
             }
         },
         methods:{
             changeType(type){
                 bus.$emit('change-type',type)
                 this.type = type
             }
         }

      }
</script>

<style scoped>
    nav.bar{
        display: flex;justify-content: space-around;
        background: none;align-items: center;
        border: none;box-shadow: none;
    }
.circle{
    width: 2rem;height: 2rem;border-radius: 50%;text-align: center;line-height: 2rem;
    color: #fff;
    font-size: 10px;
    transition: all 0.3s;
}
.circle.finish.active{
    border:none;
    background: rgb(21, 212, 53);
    color: #fff;
}
.circle.all{
    background: #fff;
    color:rgb(21, 104, 212);
    border:1px solid rgb(21, 104, 212);
}
.circle.all.active{
    border:none;
    background: rgb(21, 104, 212);
    color: #fff;
}
.circle.unfinish{
    background: #fff;
    color:rgb(216, 39, 33);
    border:1px solid rgb(216, 39, 33);
}
.circle.unfinish.active{
    border:none;
    background: rgb(216, 39, 33);
    color: #fff;
}
.circle.finish{
    background: #fff;
    color:rgb(21, 212, 53);
    border:1px solid rgb(21, 212, 53);
}
</style>
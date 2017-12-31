

<template>
    <div class="foot">
        <ul>
           <li @click='turnout(nav.name)' :key='nav.id' v-for='nav of navs' >
               <i class='yo-ico'>&#xe604;</i>
               
               <b>{{nav.content}}</b>   
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name:'foot',
        data:function(){
           return {
                 navs:[
                {id:1,content:'首页',name:'mains',font:"&#xe604;"},
                // {id:2,content:'订单',name:'tracks',font:"&#xe624;"},
                {id:3,content:'收藏',name:'collect',font:'&#xe72d;'},
                {id:4,content:'订单',name:'order',font:'&#xe6bf;'},
                {id:5,content:'我的',name:'mine',font:'&#xe631;'},
              
            ]
           }
        },
        methods:{
            turnout(name){
                this.$router.push({name})
                // this.toggleNav()
            }
        }
    }
</script>

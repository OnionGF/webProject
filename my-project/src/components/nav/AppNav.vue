<template>
    <div class="app-nav">
        <nav>
            <ul>
                <li @click='turnout(nav.name)' :key='nav.id' v-for='nav of navs' >{{nav.content}}<i class='fa fa-angle-right'></i></li>
            </ul>
        </nav>
    </div>
</template>


<script>
export default {
    name : 'app-nav',
    props:['toggleNav'],
    data:function(){
        return {
            navs:[
                {id:1,content:'首页',name:'main'},
                {id:2,content:'影片',name:'movie'},
                {id:3,content:'影院',name:'cinema'},
                {id:4,content:'商城',name:'store'},
                {id:5,content:'我的',name:'mine'},
                {id:6,content:'卖座卡',name:'sell'}
            ]
        }
    },
    methods:{
        turnout(name){
            this.$router.push({name})
            this.toggleNav()
        }
    }
}
</script>


<style lang="scss">

    .app-nav{
        animation-duration: 0.5s;
        height:100%;
        padding-top:0.5rem;
        position:fixed;
        left:0;
        width:70%;
        top:0;
        z-index:499;
        nav{
            width:100%;
            height:100%;
            background:#282828;
            border-top: 1px solid #222;
            box-shadow: 0 1px 1px #363636 inset;
        }

        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 0.5rem;
            padding:0 0.2rem;
            color:#9a9a9a;
            font-family: '宋体';
            border-bottom: 1px dotted #333;
        }
       
    }
   
</style>

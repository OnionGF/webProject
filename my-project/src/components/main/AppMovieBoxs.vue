<template>
    <div class="app-movie-box">
        <div class="dividing-line"><div class="upcoming">即将上映</div></div>
        <div class="movie">
           <!-- <ul>
               <li class='filmBox' :key='film.id' v-for='film of films'>
                  
                 
               </li>
           </ul> -->
       </div>
  
    </div>
</template>


<script>


import axios from 'axios'

export default {
    name : 'app-movie-box',
    data:function(){
       return {
            films:[]        
       }
    },
    methods:{
        getData(){
            let that = this
            // 接口https://m.maizuo.com/v4/api/film/coming-soon?__t=1514031422920&page=1&count=3
            axios.get('http://localhost:8080/boxs/v4/api/film/coming-soon',{
                params:{__t:Date.now()}
            }).then((response)=>{
                console.log(response)
                // that.films2 = response.data.data.films
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>


<style lang="scss">
.app-movie-box{
    background:#e1e1e1;
    .dividing-line {
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #a8a8a8;
        .upcoming {
            width: 65px;
            height: 20px;
            margin: 0 auto;
            margin-bottom: -10px;
            border-radius: 5px;
            font-size: 10px;
            line-height: 20px;
            text-align: center;
            color: #eee;
            background-color: #a7a7a7;
        }
    }
     .movie{
        padding-bottom:0.17rem;
         .filmBox{
            margin:0.17rem;
            padding-top:0; 
            background-color: #f9f9f9;
            -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
            -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
            box-shadow: 0.5px 0.5px 1px #a8a8a8;
            cursor: pointer; 
            .filmMes{
                background:#fff;
                display: flex;
                justify-content: space-between;
                padding:0.10rem;
                height:0.5rem;
                .filmName{
                   display: flex;
                   flex-direction: column;
                   justify-content: center;
                   font-size:12px;
                   height:0.32rem;
                    .fnt{
                        margin:0;
                        padding-top:0.12rem;
                    }
                    .fnb{
                        margin:0;
                        padding-bottom:0.12rem;
                        color:#9a9a9a;
                    }
                }
                .filmGrade{
                    font-size:0.18rem;
                    color:#f78360;
                }
            }
        }
    }
    
}
   
       
  
    
</style>

<template>
    <div class="app-movie-box">
       <div class="movie">
           <ul>
               <li class='filmBox' :key='film.id' v-for='film of films'>
                   <img width='100%' :src="film.cover.origin" alt="">
                   <div class='filmMes'>
                       <div class="filmName">
                           <p class='fnt'>{{film.name}}</p>
                           <p class='fnb'>
                               <span>{{film.cinemaCount}}家影院上映</span>
                         
                               <span>{{film.watchCount}}人购票</span>
                            </p>
                         
                       </div>

                        <div class='filmGrade'>
                            {{film.grade}}                            
                        </div>
                        
                   </div>
                 
               </li>
           </ul>
       </div>
       <div class="more-button">更多热映电影</div>
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
            // 接口https://m.maizuo.com/v4/api/film/now-playing?__t=1514028823500&page=1&count=5
            axios.get('http://localhost:8080/box/v4/api/film/now-playing',{
                params:{__t:Date.now()}
            }).then((response)=>{
                // console.log(response.data.data.films)
                that.films = response.data.data.films
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
    .more-button{
        width: 160px;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 15px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #616161;
        cursor: pointer;
    }
}
   
       
  
    
</style>

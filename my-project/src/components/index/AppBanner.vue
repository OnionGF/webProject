<template>
    <div class="banner swiper-container">
        <!-- <div class="swiper-wrapper">
            <div :key='billboard.id' v-for='billboard of billboards' class="swiper-slide">
                <img width='100%' :src="billboard.imageUrl" :title='billboard.name' alt="">
            </div>
            <div class="swiper-pagination">

            </div>
        </div> -->
        banner
    </div>
</template>

<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
    name : 'banner',
    data:function(){
        return {
            billboards:[]
        }
    }
    // ,
    // methods:{
    //     getData(){
    //         let that = this
    //         // 接口https://m.maizuo.com/v4/api/billboard/home?__t=1514012143296
    //         axios.get('/api/v4/api/billboard/home',{
    //             params:{__t:Date.now()}
    //         }).then((response)=>{
    //             // console.log(response.data.data.billboards)
    //             that.billboards = response.data.data.billboards
    //         })
    //     }
    // },
    // created(){
    //     // this.getData()
    // },
    // updated(){
    //     new Swiper('.app-banner',{loop:true})        
    // }
}
</script>
<style lang="scss">
    
</style>

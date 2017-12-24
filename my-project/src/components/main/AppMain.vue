<template>
    <div class="app-main app-box">
        <AppBanner></AppBanner>
        <AppMovieBox></AppMovieBox>
        <AppMovieBoxs></AppMovieBoxs>
        main
    </div>
</template>


<script>

import AppBanner from './AppBanner'
import AppMovieBox from './AppMovieBox'
import AppMovieBoxs from './AppMovieBoxs'
export default {
    name : 'app-main',
    components:{
        AppBanner,AppMovieBox,AppMovieBoxs
    }
}
</script>


<style lang="scss">
    .app-box{
        padding-top:0.5rem;
        // background:red;
    }
</style>

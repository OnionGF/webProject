<template>
    <div class="app-top">
        <i class='fa top fa-arrow-up'></i>
    </div>
</template>


<script>

export default {
    name : 'app-top'
}
</script>


<style lang="scss">
    .app-top{
        background-color: rgba(0,0,0,0.7);
        // background-color:red;
        width: 48px;
        height: 48px;
        line-height: 48px;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        position: fixed;
        top:550px;
        left:300px;
        z-index: 600;
        .top{
            margin-top:0.1rem;
            font-size: 28px;
        }
    }
</style>

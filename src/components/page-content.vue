<template>
    <div class="content">
        <transition name="page-switch">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import "animate.css"
export default {

}
</script>

<style scoped>
    .content{
        padding:10px;
        box-sizing:border-box;
        height:calc(100vh - 50px);
    }
    .page-switch-enter-active {
        animation: fadeIn .3s; /*fadeIn-渐隐,pulse-放大,zoomIn-剧烈放大*/
    }
    .page-switch-leave-active {
        animation: fadeIn .3s reverse;
    }
</style>
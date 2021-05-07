<template>
    <div class="header">
        <div class="title">新入网用户456成长视图</div>
        <div class="time">2021-04-30 09:33:25</div>
        <div class="nav">
            <span><router-link to="/pagea">高拉新</router-link></span>
            <span><router-link to="/pageb">高预存</router-link></span>
            <span><router-link to="/pagea">新发展</router-link></span>
            <span><router-link to="/pageb">高活跃</router-link></span>
            <span><router-link to="/pagea">高粘性</router-link></span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:this.$store.state.count
        }
    },
    mounted(){
        this.$store.commit("increment")
        this.count = this.$store.state.count
    },
    methods:{
        
    }
}
</script>

<style scoped>
    div.header{
        height:50px;
        background:url(../assets/images/header.png) no-repeat top center;
        background-size:auto 100%;
        position:relative;
    }
    div.header div.title{
        background-image: linear-gradient(-90deg,#69daff,#ffffff);
        -webkit-background-clip:text;
        color: transparent;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
    }
    div.header div.time{
        position:absolute;
        top:20px;
        right:10px;
        color:#0086ff;
    }
    div.nav{
        position:absolute;
        top:60px;
        left:0;
        width:100%;
        height:40px;
        text-align:center;
        background:url(../assets/images/nav-bg.png) no-repeat top center;
        background-size:auto 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index: 9999;
    }
    div.nav span a{
        color:#337cff;
        display: block;
        margin: 0 10px;
        font-size:13px;
        cursor: pointer;
        text-decoration: none;
    }
    div.nav span:nth-child(3) a{
        color:#fdfe58;
        margin:0 40px;
        font-size:15px;
    }
</style>
<template>
    <div
        :id="domId"
        class="zc-chart-wraper"
    ></div>
</template>

<script>
import * as utils from "./utils"
import optionCreater from "./option-creater"
export default{
    props:{
        chartType:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            domId:"zcChart"+new Date().getTime()
        }
    },
    mounted(){
        const _this = this
        let myChart = utils.initChartInstance(this.domId)
        let option = optionCreater(this.chartType)
        myChart.setOption(option)
        myChart.on("click",function(params){
            _this.$emit("onClick",params)
        })
    }
}
</script>
<style scoped>
    .zc-chart-wraper{
        width: 100%;
        height: 100%;
    }
</style>
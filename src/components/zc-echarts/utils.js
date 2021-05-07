
import * as echarts from 'echarts'
function initChartInstance(domId){
    let dom = document.getElementById(domId);
    let myChart = echarts.getInstanceByDom(dom);
    if(myChart){
        myChart.clear();
    }else{
        myChart = echarts.init(dom);
    }
    
    return myChart
}

export {
    initChartInstance
}
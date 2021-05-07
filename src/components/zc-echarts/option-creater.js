/**
 * 不同图表的option在这个文件中生成
*/
import _ from 'lodash'
import {
    title,
    legend,
    grid,
    axisCategory,
    axisValue,
    tooltip,
    lineSeries,
    barSeries
} from './config'

function optionCreater(type){
    let option = {}
    if(type == "line"){
        option = createLineOption()
    }else if(type == "bar"){
        option = createBarOption()
    }
    return option
}

function createLineOption(){
    let option = {
        title,
        legend,
        grid,
        tooltip,
        xAxis:axisCategory,
        yAxis:axisValue,
        series:lineSeries
    }
    return _.merge({},option,{
        title:{
            text:"",
            subtext:""
        },
        xAxis:{
            data:["类目1","类目2","类目3","类目4"]
        },
        series:{
            name:"系列一",
            data:[1,2,3,4]
        }
    })
}
function createBarOption(){
    let option = {
        title,
        legend,
        grid,
        tooltip,
        xAxis:axisCategory,
        yAxis:axisValue,
        series:barSeries
    }
    return _.merge({},option,{
        title:{
            text:"",
            subtext:""
        },
        xAxis:{
            data:["类目1","类目2","类目3","类目4"]
        },
        series:{
            name:"系列一",
            data:[1,2,3,4]
        }
    })
}

export default optionCreater
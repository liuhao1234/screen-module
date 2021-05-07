let title = {
    show:true,
    left:"center",
    top:"auto",
    right:"auto",
    bottom:"auto",
    text:"默认标题",
    textStyle:{
        color:"#333",
        fontSize:18,
        fontWeight:"normal"
    },
    subtext:"默认副标题",
    subtextStyle:{
        color:"#aaa",
        fontSize:14,
        fontWeight:"normal"
    }
}

let legend = {
    show:true,
    left:"center",
    top:"auto",
    right:"auto",
    bottom:"auto",
    itemGap:10,
    scrollDataIndex:0,
    pageButtonItemGap:5,
    pageButtonGap:0,
    pageButtonPosition:'end',
    pageFormatter:'{current}/{total}',
    pageIconColor: '#2f4554' ,
    pageIconInactiveColor: '#aaa' ,
    pageIconSize: 15 ,
    pageTextStyle:{}
}

let grid = {
    show:false,
    left:10,
    top:60,
    right:10,
    bottom:10,
    containLabel:true
}

let visualMap = {
    type:"continuous",
    min: 0,
    max: 1000,
    right:80,
    calculable: true,
    seriesIndex: [0],
    inRange: {
        color: ['#09e5e5', '#0953e5']
    },
    textStyle: {
        color: '#24CFF4'
    }
}

let axisCategory = {
    type:"category",
    show:true,
    position:"bottom",
    name:"名称",
    nameLocation:"end",
    nameTextStyle:{
        fontSize:12,
        fontWeight:"normal",
        align:"left",
        verticalAlign:"top",
        padding:0
    },
    nameGap:15,
    nameRotate:0,
    inverse:false,
    boundaryGap:true,
    axisLine:{
        show:true,
        onZero:true,
        onZeroAxisIndex:0,
        symbol:"none",
        symbolSize:[10,15],
        symbolOffset:[0,0],
        lineStyle:{
            width:1,
            type:"solid",
            opacity:1
        }
    },
    axisTick:{
        show:true,
        alignWithLabel:false,
        inside:false,
        length:5,
        lineStyle:{
            width:1,
            type:"solid",
            opacity:1
        }
    },
    axisLabel:{
        show:true,
        fontWeight:"normal",
        fontSize:12,
        interval:0,
        rotate:20,
        margin:8,
        formatter:"{value}"
    },
    splitLine:{
        show:false,
        lineStyle:{
            width:1,
            type:"solid",
            opacity:0
        }
    },
    splitArea:{
        show:false,
        interval:"auto",
        areaStyle:{
            color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
            opacity:1
        }
    },
    data:[]
}

let axisValue = {
    type:"value",
    show:true,
    position:"left",
    name:"名称",
    nameLocation:"end",
    nameTextStyle:{
        fontSize:12,
        fontWeight:"normal",
        align:"left",
        verticalAlign:"top",
        padding:0
    },
    nameGap:15,
    nameRotate:0,
    inverse:false,
    axisLine:{
        show:true,
        onZero:true,
        onZeroAxisIndex:0,
        symbol:"none",
        symbolSize:[10,15],
        symbolOffset:[0,0],
        lineStyle:{
            width:1,
            type:"solid",
            opacity:1
        }
    },
    axisTick:{
        show:true,
        alignWithLabel:true,
        interval:"auto",
        inside:false,
        length:5,
        lineStyle:{
            width:1,
            type:"solid",
            opacity:1
        }
    },
    axisLabel:{
        show:true,
        fontWeight:"normal",
        fontSize:12,
        interval:"auto",
        rotate:0,
        margin:8,
        formatter:"{value}"
    },
    splitLine:{
        show:true,
        interval:"auto",
        lineStyle:{
            width:1,
            type:"solid",
            opacity:0
        }
    },
    splitArea:{
        show:false,
        interval:"auto",
        areaStyle:{
            color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
            opacity:1
        }
    },
    data:[]
}

let tooltip = {
    show:true,
    trigger:"axis",
    axisPointer:{
        type:'none'
    },
    showContent:true,
    alwaysShowContent:false,
    enterable:false,
    confine:true,
}

let radar = {
    radius: '75%',
    center: ['50%', '50%'],
    nameGap:5,
    name:{
        show:true,
        formatter:'{value}'
    },
    axisLine: {},
    axisTick: {},
    axisLabel: {},
    splitLine: {},
    splitArea: {},
    indicator: []
}

let lineSeries = {
    type:"line",
    name:"",
    xAxisIndex:0,
    yAxisIndex:0,
    showSymbol:true,
    symbol:"emptyCircle",
    symbolSize:4,
    symbolRotate:0,
    label:{
        show:true,
        position:"top",
        distance:5,
        rotate:0,
        offset:[0,0],
        fontSize:12,
        fontWeight:"normal"
    },
    data:[]
}

let barSeries = {
    type:"bar",
    name:"",
    stack:"",
    xAxisIndex:0,
    yAxisIndex:0,
    barWidth:14,
    showSymbol:true,
    symbol:"emptyCircle",
    symbolSize:4,
    symbolRotate:0,
    label:{
        show:true,
        position:"top",
        distance:5,
        rotate:0,
        offset:[0,0],
        fontSize:12,
        fontWeight:"normal"
    },
    data:[]
}

let pieSeries = {
    type:"pie",
    name:"",
    clockwise:true,
    startAngle:90,
    minAngle:0,
    minShowLabelAngle:0,
    roseType:false,
    avoidLabelOverlap:true,
    stillShowZeroSum:true,
    center:['50%','50%'],
    radius:[0,"75%"],
    label:{
        show:true,
        position:"outside"
    },
    labelLine:{
        show:true,
        length:5,
        smooth:false,
        lineStyle:{
            width:1,
            type:"solid"
        }
    },
    data:[]
}

let radarSeries = {
    type: 'radar',
    symbolSize: 8,
    itemStyle: {
        borderWidth: 2,
    },
    areaStyle: {
        width: 1,
        opacity: 0.3,
    },
    data: []
}

let funnelSeries = {
    type:'funnel',
    name:"",
    min: 0,
    maxSize: '50%',
    sort:"descending",
    label:{
        show: true,
        position: 'inside',
        fontSize:12,
        color:'#fff',
    },
    labelLine: {
        length: 10,
        lineStyle: {
            width: 1,
            type: 'solid'
        }
    },
    itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
    },
    data:[]
}

let scatterSeries = {
    type:"scatter",
    label: {
        show: true,
        position: 'bottom',
        formatter: '{b}',
    },
    data: [],
}

let geo = {
    map:'mapType',
    animation: false,
    roam:true,
    layoutCenter:["50%","50%"],
    layoutSize: "80%",
    label:{
        normal:{
            show:true,
            color:"#fff"
        },
        emphasis: {
            show:true,
            color:"#fff"
        }
    },
    itemStyle: {
        normal: {
            areaColor: '#3a7fd5',
            borderColor: '#0a53e9',//线
            shadowColor: '#092f8f',//外发光
            shadowBlur: 20
        },
        emphasis: {
            areaColor: '#0a2dae',//悬浮区背景
        }
    }
}

export {
    title,
    legend,
    grid,
    visualMap,
    axisCategory,
    axisValue,
    tooltip,
    radar,
    lineSeries,
    barSeries,
    pieSeries,
    radarSeries,
    funnelSeries,
    scatterSeries,
    geo
}
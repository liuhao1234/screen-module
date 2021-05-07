<template>
    <div class="page-wraper">
        <div class="section-middle">
            <div class="section-left">
                <div class="chart-top common-bg">
                    <div class="section-title"><span>高拉新</span></div>
                    <div class="detail-new"><span>月累计:</span><b><small>0.0%</small></b></div>
                    <div class="chart-section">
                        <zc-echarts
                            chartType="line"
                            @onClick="chartClick($event,params)"
                        ></zc-echarts>
                    </div>
                </div>
                <div class="chart-bottom common-bg">
                    <div class="section-title"><span>高预存</span></div>
                    <div class="chart-section high-save">
                        <div class="save-item">
                            <div class="left">
                                <div class="chart-pb-title">
                                    <span>0.0%</span>
                                </div>
                                <div class="chart-pb"></div>
                            </div>
                            <div class="right">
                                <div class="title">百元首充占比</div>
                                <div class="process">
                                    <div class="value">59.7%</div>
                                    <div class="line">
                                        <div class="line-split"></div>
                                        <div class="line-main"></div>
                                    </div>
                                </div>
                                <div class="save-detail"><span>日数据</span><b>0.0%</b><span>月累计</span><b>0.0%</b></div>
                            </div>
                        </div>
                        <div class="save-item">
                            <div class="left">
                                <div class="chart-pb-title">
                                    <span>45.6%</span>
                                </div>
                                <div class="chart-pb"></div>
                            </div>
                            <div class="right">
                                <div class="title">百元首充占比</div>
                                <div class="process">
                                    <div class="value">59.7%</div>
                                    <div class="line">
                                        <div class="line-split"></div>
                                        <div class="line-main"></div>
                                    </div>
                                </div>
                                <div class="save-detail"><span>日数据</span><b>45.6%</b><span>月累计</span><b>45.6%</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-center">
                <div class="play-btn pause"></div>
                <div class="map-back"></div>
                <div class="map-detail">
                    <div class="detail-item">
                        <div class="process">
                            <div class="line"></div>
                            <div class="main-line"></div>
                        </div>
                        <div class="content">
                            <div class="title">新发展</div>
                            <div class="value">234</div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="process">
                            <div class="line"></div>
                            <div class="main-line"></div>
                        </div>
                        <div class="content">
                            <div class="title">新发展</div>
                            <div class="value">234</div>
                        </div>
                    </div>
                    <div class="detail-item yellow">
                        <div class="process">
                            <div class="line"></div>
                            <div class="main-line"></div>
                        </div>
                        <div class="content">
                            <div class="title">新发展</div>
                            <div class="value">234</div>
                        </div>
                    </div>
                </div>
                <div class="chart-map"></div>
            </div>
            <div class="section-right">
                <div class="chart-top common-bg chart-radar">
                    <div class="section-title"><span>高粘性</span></div>
                    <div class="chart-section">
                        <zc-echarts
                            chartType="bar"
                        ></zc-echarts>
                    </div>
                </div>
                <div class="chart-bottom common-bg text-circle ">
                    <div class="section-title"><span>高活跃</span></div>
                    <div class="chart-section">
                        <div class="high-active">
                            <div class="active-item">
                                <div class="high-active-chart">
                                    <div class="high-chart-title"><span>57.9%</span></div>
                                    <div class="high-chart-section"></div>
                                </div>
                                <div class="high-active-title">月累计三无占比</div>
                            </div>
                            <div class="active-item">
                                <div class="high-active-chart">
                                    <div class="high-chart-title"><span>60%</span></div>
                                    <div class="high-chart-section"></div>
                                </div>
                                <div class="high-active-title">月累计三无占比</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-bottom common-bg">
            <div class="section-title"><span>6个月成长计划</span></div>
            <div class="bottom-main">
                <div class="time-line">
                    <div class="light"></div>
                </div>
                <div class="plan-list">
                    <div class="plan-item text-block">
                        <div class="title"><span><b>入网T+0</b></span></div>
                        <div class="dot"><span></span></div>
                        <div class="total bg-type01">
                            <i></i>
                            <span>用户量:</span>
                            <b>18.5w</b>
                        </div>
                        <div class="detail bg-type01">
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                        </div>
                    </div>
                    <div class="plan-item text-block">
                        <div class="title"><span><b>入网T+0</b></span></div>
                        <div class="dot"><span></span></div>
                        <div class="total bg-type01">
                            <i></i>
                            <span>用户量:</span>
                            <b>18.5w</b>
                        </div>
                        <div class="detail bg-type01">
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                        </div>
                    </div>
                    <div class="plan-item text-block">
                        <div class="title"><span><b>入网T+0</b></span></div>
                        <div class="dot"><span></span></div>
                        <div class="total bg-type01">
                            <i></i>
                            <span>用户量:</span>
                            <b>18.5w</b>
                        </div>
                        <div class="detail bg-type01">
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                        </div>
                    </div>
                    <div class="plan-item text-block">
                        <div class="title"><span><b>入网T+0</b></span></div>
                        <div class="dot"><span></span></div>
                        <div class="total bg-type01">
                            <i></i>
                            <span>用户量:</span>
                            <b>18.5w</b>
                        </div>
                        <div class="detail bg-type01">
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                        </div>
                    </div>
                    <div class="plan-item text-block">
                        <div class="title"><span><b>入网T+0</b></span></div>
                        <div class="dot"><span></span></div>
                        <div class="total bg-type01">
                            <i></i>
                            <span>用户量:</span>
                            <b>18.5w</b>
                        </div>
                        <div class="detail bg-type01">
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                        </div>
                    </div>
                    <div class="plan-item text-block">
                        <div class="title"><span><b>入网T+0</b></span></div>
                        <div class="dot"><span></span></div>
                        <div class="total bg-type01">
                            <i></i>
                            <span>用户量:</span>
                            <b>18.5w</b>
                        </div>
                        <div class="detail bg-type01">
                            <div class="detail-item">
                                <i class="yellow">活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i>活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                            <div class="detail-item">
                                <i class="orange">活</i>
                                <span>激活用户:</span>
                                <strong><b></b></strong>
                                <small>100%</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import zcEcharts from "../components/zc-echarts/zc-echarts"
export default {
    components:{
        zcEcharts
    },
    methods:{
        chartClick(params){
            console.log("pagea",params)
        }
    }
}
</script>

<style scoped>
    div.section-middle{
        height:calc(100% - 290px);
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;
    }
    div.section-middle .section-left{
        height:100%;
        width:25%;
    }
    div.section-middle .section-left .chart-section,
    div.section-middle .section-right .chart-section{
        height:calc(100% - 42px);
        margin-top:10px;
    }
    div.section-middle .section-left .chart-top{
        height:calc((100% - 10px)/2);
        position:relative;
    }
    div.section-middle .section-left .chart-top .detail-new{
        position: absolute;
        top: 35px;
        left: 0;
        color: #fff;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
        font-weight: normal;
    }
    div.section-middle .section-left .chart-top .detail-new b{
        font-weight:normal;
        background:url(../assets/images/item-bg.png) no-repeat center center;
        background-size: 100% 100%;
        padding: 8px 14px;
        display:inline-block;
        margin-left:5px;
    }
    div.section-middle .section-left .chart-top .detail-new b small{
        background-image: linear-gradient(0deg,#fbc91a,#ffffff);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 16px;
        font-weight: bold;
    }
    div.section-middle .section-left .chart-bottom{
        margin-top:10px;
        height:calc((100% - 10px)/2);
    }
    div.section-middle .section-center{
        height:100%;
        width:calc(50% - 16px);
        margin-left:8px;
        position:relative;
        background:url(../assets/images/map-bg.png) no-repeat center center;
        background-size:cover;
    }
    div.section-middle .section-center .play-btn{
        display:block;
        position:absolute;
        top:20px;
        right:20px;
        width:40px;
        height:40px;
        background:url(../assets/images/play-btn.png) no-repeat top center;
        background-size:contain;
        z-index:9;
        cursor:pointer;
    }
    div.section-middle .section-center .play-btn.pause{
        background:url(../assets/images/pause-btn.png) no-repeat top center;
        background-size:contain;
    }
    div.section-middle .section-center .map-back{
        display:none;
        position:absolute;
        top:20px;
        right:70px;
        width:40px;
        height:40px;
        background:url(../assets/images/map-back.png) no-repeat center center;
        background-size:contain;
        z-index:9;
        cursor:pointer;
    }
    div.section-middle .section-center .map-detail{
        position:absolute;
        top:40px;
        left:10px;
    }
    div.section-middle .section-center .map-detail .detail-item{
        display:flex;
        justify-content:space-between;
        margin-bottom:10px;
    }
    div.section-middle .section-center .map-detail .detail-item .process{
        width:30px;
        height:50px;
        background:#022b66;
        position:relative;
        overflow:hidden;
    }
    div.section-middle .section-center .map-detail .detail-item .process .line{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:url(../assets/images/line-bg.png) repeat-y top left;
        background-size:100% auto;
        z-index:9;
    }
    div.section-middle .section-center .map-detail .detail-item .process .main-line{
        width:100%;
        height:50%;
        background:#337cff;
        position:absolute;
        bottom:0;
        left:0;
    }
    div.section-middle .section-center .map-detail .detail-item.yellow .process .main-line{
        background:#e3a821;
    }
    div.section-middle .section-center .map-detail .detail-item .content{
        margin-left:5px;
    }
    div.section-middle .section-center .map-detail .detail-item .content .title{
        width:100px;
        height:20px;
        text-align:center;
        line-height:20px;
        font-size:16px;
        color:#fff;
        background:#0b44aa;
        border-radius:4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size:13px;
    }
    div.section-middle .section-center .map-detail .detail-item.yellow .content .title{
        background:#e3a821;
    }
    div.section-middle .section-center .map-detail .detail-item .content .value{
        background-image: linear-gradient(0deg,#fbc91a,#ffffff);
        -webkit-background-clip: text;
        color: transparent;
        width:100%;
        height:30px;
        text-align:center;
        line-height:30px;
        font-size:28px;
        font-weight:bold;
    }
    div.section-middle .section-center .chart-map{
        height:100%;
    }
    div.section-middle .section-right{
        height:100%;
        width:25%;
    }
    div.section-middle .section-right .chart-top{
        height:calc((100% - 10px)/2);
    }
    div.section-middle .section-right .chart-bottom{
        margin-top:10px;
        height:calc((100% - 10px)/2);
    }
    div.high-save .save-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:49.99999999%;
        padding:0 10px;
    }
    div.high-save .save-item .left{
        width:80px;
        height:80px;
        margin:0;
        
        position:relative;
    }
    div.high-save .save-item .left .chart-pb{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    div.high-save .save-item .left .chart-pb-title{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:9;
        display:flex;
        justify-content:center;
        align-items:center;
        background:url(../assets/images/dot-circle.png) no-repeat center center;
        background-size:70% 70%;
    }
    div.high-save .save-item .left .chart-pb-title span{
        background-image: linear-gradient(0deg,#fbc91a,#ffffff);
        -webkit-background-clip: text;
        color: transparent;
        font-weight:bold;
        font-size:16px;
    }
    div.high-save .save-item .right{
        width:calc(100% - 85px);
        margin-left:5px;
    }
    div.high-save .save-item .right .title{
        color:#fff;
        text-align:left;
        font-size:13px;
    }
    div.high-save .save-item .right .process{
        border:1px solid #0a96f2;
        height:20px;
        position:relative;
        margin:5px 0;
    }
    div.high-save .save-item .right .process .value{
        position:absolute;
        top:2px;
        right:5px;
        color:#4bf3f9;
        font-size:12px;
        z-index:10;
        text-shadow: 0 0 5px #000;
    }
    div.high-save .save-item .right .process .line{
        position:absolute;
        top:2px;
        left:2px;
        height:14px;
        width:calc(100% - 4px);
    }
    div.high-save .save-item .right .process .line .line-split{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:url(../assets/images/line-bg-vertical.png) repeat-x center center;
        background-size:auto 100%;
        z-index:9;
    }
    div.high-save .save-item .right .process .line .line-main{
        width:50%;
        height:100%;
        background:#05c5f9;
        margin:0;
        background-image: linear-gradient(90deg,#155fea, #00e7fe);
    }
    div.high-save .save-item .right .save-detail{
        text-align:left;
        font-size:13px;
    }
    div.high-save .save-item .right .save-detail span{
        color:#fff;
        padding-right:5px;
    }
    div.high-save .save-item .right .save-detail b{
        color:#4bf3f9;
        font-weight:bold;
        padding-right:10px;
    }
    div.high-active{
        height:100%;
        display:flex;
        justify-content:space-between;
    }
    div.high-active .active-item{
        height:100%;
        width:49.9999999%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    div.high-active .active-item .high-active-chart{
        width: 80%;
        height: 150px;
        margin-bottom: 10px;
        position:relative;
    }
    div.high-active .active-item .high-active-chart .high-chart-section{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    div.high-active .active-item .high-active-chart .high-chart-title{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:9;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    div.high-active .active-item .high-active-chart .high-chart-title span{
        background-image: linear-gradient(0deg,#fbc91a,#ffffff);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    div.high-active .active-item .high-active-title{
        height:36px;
        background:url(../assets/images/title-bg02.png) no-repeat center center;
        line-height:32px;
        background-size: 100% 100%;
        text-align: center;
        line-height: 36px;
        color: #fff;
        padding: 0 10px;
        font-size:13px;
    }

    /* 底部样式 */
    div.section-bottom{
        position:relative;
        height:280px;
    }
    div.section-bottom div.bottom-main{
        position:relative;
        box-sizing: border-box;
        padding: 10px 0;
    }
    div.section-bottom div.bottom-main div.time-line{
        height:0;
        border-bottom:1px solid #1fdae1;
        position:absolute;
        left:10px;
        top:56px;
        width:calc(100% - 20px);
    }
    div.section-bottom div.bottom-main div.time-line:before{
        content:"";
        display:block;
        width:0;
        height:0;
        border: 8px solid transparent;
        border-right: 8px solid #1fdae1;
        position: absolute;
        top: -7px;
        left: -10px;
    }
    div.section-bottom div.bottom-main div.time-line:after{
        content:"";
        display:block;
        width:0;
        height:0;
        border: 8px solid transparent;
        border-left: 8px solid #1fdae1;
        position: absolute;
        top: -7px;
        right: -10px;
    }
    div.section-bottom div.bottom-main div.time-line .light{
        width:48px;
        height:24px;
        background:url(../assets/images/light.png) no-repeat center center;
        background-size:auto 100%;
        position: absolute;
        top: -11px;
        left: 0;
        animation:lightmove linear 18s infinite 
    }
    @keyframes lightmove{
        0%{
            left:0;
        }
        50%{
            left:48%;
        }
        100%{
            left:96%;
        }
    }
    div.section-bottom div.bottom-main div.plan-list{
        overflow:hidden;
        position:relative;
        z-index:9;
        padding:0 20px;
    }
    div.plan-list div.plan-item{
        float:left;
        box-sizing:border-box;
        width:16.666666%;
        padding:0 5px;
    }
    div.plan-item div.title{
        text-align:center;
        margin-bottom:7px;
    }
    div.plan-item div.title span{
        display:inline-block;
        border:1px solid #337cff;
        border-radius:4px;
        color:#fff;
        padding:1px 3px;
        font-size:13px;
        position:relative;
    }
    div.plan-item div.title span b{
        position:relative;
        z-index:2;
        font-weight:normal;
    }
    div.plan-item div.title span:after{
        content:"";
        width:10px;
        height:10px;
        border:1px solid #337cff;
        position:absolute;
        left:50%;
        bottom:-6px;
        margin-left:-6px;
        transform:rotate(45deg);
        z-index:0;
    }
    div.plan-item div.title span:before{
        content:"";
        width:13px;
        height:10px;
        background:#0a1231;
        position:absolute;
        bottom:-1px;
        left:50%;
        margin-left:-7px;
        z-index:1;
    }
    div.plan-item div.dot{
        text-align:center;
        padding:5px 0;
    }
    div.plan-item div.dot span{
        display:inline-block;
        width:16px;
        height:16px;
        border-radius:50%;
        background:#00c1f5;
        border:4px solid #013f6b;
        animation:dotbigger ease 2s infinite;
    }
    @keyframes dotbigger{
        0%{
            transform:scale(1);
            opacity:1;
        }
        50%{
            transform:scale(1.5);
            opacity:0.5;
        }
        100%{
            transform:scale(1);
            opacity:1;
        }
    }
    div.plan-item div.total{
        height:46px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        color:#88d7fd;
        font-size:12px;
        font-weight:normal;
    }
    div.plan-item div.total i{
        margin-left:10px;
        display:inline-block;
        width:28px;
        height:28px;
        background:url(../assets/images/plan-icon-person.png) no-repeat center center;
        background-size:cover;
    }
    div.plan-item div.total span{
        padding:0 10px;
    }
    div.plan-item div.total b{
        font-weight:normal;
        display:inline-block;
        background:url(../assets/images/item-bg.png) no-repeat center center;
        background-size: 100% 100%;
        height: 28px;
        line-height: 28px;
        padding: 0 10px;
    }
    div.plan-item div.detail{
        display:block;
        margin-top:5px;
    }
    div.plan-item div.detail div.detail-item{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        height:32px;
        padding:0 5px;
        background:#2a3d6b;
    }
    div.plan-item div.detail div.detail-item:nth-child(2){
        margin:5px 0;
    }
    div.plan-item div.detail div.detail-item i{
        display:block;
        width:20px;
        height:20px;
        background:#f00;
        margin-right:5px;
        position:relative;
        text-align:center;
        line-height:20px;
        color:#fff;
        background:url(../assets/images/icon-flag-blue.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.blue{
        background:url(../assets/images/icon-flag-blue.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.bluelight{
        background:url(../assets/images/icon-flag-bluelight.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.bluedeep{
        background:url(../assets/images/icon-flag-bluedeep.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.green{
        background:url(../assets/images/icon-flag-green.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.red{
        background:url(../assets/images/icon-flag-red.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.orange{
        background:url(../assets/images/icon-flag-orange.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item i.yellow{
        background:url(../assets/images/icon-flag-yellow.png) no-repeat center center;
        background-size: 100% 100%;
    }
    div.plan-item div.detail div.detail-item span{
        display:block;
        width:60px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        color:#fff;
        font-size:12px;
    }
    div.plan-item div.detail div.detail-item strong{
        display:block;
        width:calc(100% - 115px);
        height:10px;
        margin-right:5px;
        border-radius:8px;
        background:#164ba7;
    }
    div.plan-item div.detail div.detail-item strong b{
        display:block;
        height:100%;
        width:50%;
        border-radius:8px;
        background-image: linear-gradient(90deg,#1a6aef, #0cccfd);
    }
    div.plan-item div.detail div.detail-item small{
        color:#1afcff;
    }
</style>
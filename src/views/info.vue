<template>
    <div class="bg">
        <div class="section">
            <div class="menu"><span class="person">个人中心</span><span class="account"> > 帐户总览</span></div>
            <el-row>
                <el-col :span="5">
                    <div>
                        <div class="menu-item" @click="tabIndex(1)">
                            <img v-if="index != 1" src="@/assets/images/帐户总览2.png" alt="">
                            <img v-else src="@/assets/images/帐户总览.png" alt="">
                            <span :style="{color:index != 1?'#9FA9BA':'#108BED'}">账户总览</span>
                        </div>
                        <div class="menu-item"  @click="tabIndex(2)">
                            <img v-if="index != 2" src="@/assets/images/全量2.png" alt="">
                            <img v-else src="@/assets/images/全量.png" alt="">
                            <span :style="{color:index != 2?'#9FA9BA':'#108BED'}">企业全量数据</span>
                        </div>
                        <div class="menu-item"  @click="tabIndex(3)">
                            <img v-if="index != 3" src="@/assets/images/API2.png" alt="">
                            <img v-else src="@/assets/images/API.png" alt="">
                            <span :style="{color:index != 3?'#9FA9BA':'#108BED'}">企业数据API</span>
                        </div>
                        <div class="menu-item"  @click="tabIndex(4)">
                            <img v-if="index != 4" src="@/assets/images/监控2.png" alt="">
                            <img v-else src="@/assets/images/监控.png" alt="">
                            <span :style="{color:index != 4?'#9FA9BA':'#108BED'}">企业监控</span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="19">
                    <div v-if="index==1" class="json">
                        <div class="user-info">
                            <el-row>
                                <el-col :span="15">
                                    <div class="company">
                                        <img src="@/assets/images/个人-总览.png" alt="">
                                        <span>西安极数宝数据服务有限公司，下午好！</span>
                                    </div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="time">
                                        <div class="date">2019-04-10</div>
                                        <div class="notice">合同截止日期</div>
                                    </div>
                                </el-col>
                                <el-col :span="4">
                                    <div class="btn">
                                        <img src="@/assets/images/续签icon.png" alt="">
                                        <span>续签</span>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="list-info">
                            <el-row>
                                <el-col :span="8">
                                    <div class="items">
                                        <div class="title">企业全量数据</div>
                                        <span class="name">总量</span>
                                        <span class="number">1.58亿</span>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="items">
                                        <div class="title">企业数据API</div>
                                        <span class="name">今日调用数量</span>
                                        <span class="number">0</span>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="items">
                                        <div class="title">企业监控</div>
                                        <span class="name">今日异常数量</span>
                                        <span class="number" style="color: #F6323C">0</span>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div v-if="index==2" class="chart">
                        <v-chart :options="polar"/>
                    </div>
                    <div v-if="index==3" class="chart">

                    </div>
                    <div v-if="index==4" class="chart">

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ECharts from 'echarts'
    export default {
        name: "info",
        data(){
            return {
                index:1,
                polar: {
                    title : {
                        text: '会员数据统计',
                        subtext: '动态数据',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        orient: 'vertical',
                        left: 'left',
                        data: ['微信访问','公众号访问','扫码进入','分享进入','搜索访问']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'line',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'微信访问'},
                                {value:310, name:'公众号访问'},
                                {value:234, name:'扫码进入'},
                                {value:135, name:'分享进入'},
                                {value:1548, name:'搜索访问'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
        methods:{
            tabIndex(index){
                this.index = index;
            }
        }
    }
</script>

<style scoped>
    .section .json {
        height: 256px;
        background: #ffffff;
        margin-bottom: 426px;
    }
    .section .chart {
        background: #ffffff;
        height: 618px;
        margin-bottom: 64px;
    }
    .section .json .list-info{
        height: 70px;
        padding: 40px 0 25px 0;
    }
    .section .json .list-info .items{
        border-right: 1px solid rgba(225,229,237,1);
    }
    .section .json .list-info .title{
        font-size:14px;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin-bottom: 24px;
    }
    .section .json .list-info .name{
        font-size:14px;
        font-weight:600;
        color:rgba(157,169,188,1);
    }
    .section .json .list-info .number{;
        margin-left: 19px;
        font-size:26px;
        font-weight:bold;
        color:rgba(16,139,237,1);
    }
    .section .json .user-info .btn span{
        margin-left: 9px;
    }
    .section .json .user-info .btn span,img{
        vertical-align: middle;
    }
    .section .json .user-info .btn{
        margin-top: 15px;
        margin-left: 37px;
        line-height: 30px;
        width: 94px;
        height: 30px;
        background:linear-gradient(90deg,rgba(247,169,71,1) 0%,rgba(237,151,36,1) 100%);
        box-shadow:0px 10px 14px 0px rgba(255,145,51,0.2);
        border-radius:16px;
        color:#FFFFFF ;
    }
    .section .json .user-info .time{
        padding-left: 20px;
    }
    .section .json .user-info .time .date {
        font-size: 26px;
        font-weight:bold;
        color:rgba(250,142,2,1);
    }
    .section .json .user-info .time .notice {
        font-size:14px;
        font-weight:500;
        color:rgba(157,169,188,1);
        margin-top: 10px;
    }
    .section .json .user-info .company span,img{
        vertical-align: middle;
    }
    .section .json .user-info .company span{
        font-size:14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-left: 16px;
    }
    .section .json .user-info .company{
        text-align: left;
        margin-left: 30px;
        border-right:1px solid rgba(225,229,237,1);;
    }
    .section .json .user-info{
        height: 60px;
        padding: 30px 0;
        border-bottom:1px solid rgba(225,229,237,1);;
    }
    .section .menu-item span{
        margin-left: 26px;
        font-size:18px;
        font-weight:500;
        color:rgba(16,139,237,1);
    }
    .section .menu-item img{
        margin-left: 28px;
        vertical-align: middle;
    }
    .section .menu-item{
        cursor: pointer;
        text-align: left;
        height: 55px;
        margin-right: 20px;
        line-height: 55px;
        background:rgba(255,255,255,1);
        margin-bottom: 20px;
    }
    .section .menu{
        font-size:14px;
        font-weight:500;
        color:rgba(159,169,186,1);
        text-align: left;
        height: 40px;
        line-height: 40px;
    }
    .section .menu .person{
        color: #999999;
    }
    .section .menu .account{
        color: #666666;
    }
    .bg {
        background: rgba(245, 250, 254, 1);
    }

    .section {
        height: 100%;
        width: 1220px;
        padding: 0;
        margin: 0 auto;
    }
</style>
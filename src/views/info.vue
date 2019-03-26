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
                        <div class="menu-item" @click="tabIndex(2)">
                            <img v-if="index != 2" src="@/assets/images/全量2.png" alt="">
                            <img v-else src="@/assets/images/全量.png" alt="">
                            <span :style="{color:index != 2?'#9FA9BA':'#108BED'}">企业全量数据</span>
                        </div>
                        <div class="menu-item" @click="tabIndex(3)">
                            <img v-if="index != 3" src="@/assets/images/API2.png" alt="">
                            <img v-else src="@/assets/images/API.png" alt="">
                            <span :style="{color:index != 3?'#9FA9BA':'#108BED'}">企业数据API</span>
                        </div>
                        <div class="menu-item" @click="tabIndex(4)">
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
                        <div class="item-title">全量数据</div>
                        <div class="item-content">
                            <div class="item-data">
                                <div class="content-data">
                                    <div class="content-number">1.5亿</div>
                                    <div class="content-name">当前总量</div>
                                </div>
                                <div class="content-data margin-left-30">
                                    <div class="content-number">453</div>
                                    <div class="content-name color-green">今日更新</div>
                                </div>
                            </div>
                            <div class="item-chart">
                                <el-row type="flex" class="row-bg">
                                    <el-col :span="12">
                                        <div class="chart-title">历史调用统计图</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="chart-btn">
                                            <div :class="['button', btnIndex==1?'buttonIndex':'']" @click="btn(1)">WEEKLY</div>
                                            <div :class="['button', btnIndex==2?'buttonIndex':'']" @click="btn(2)">MONTLY</div>
                                            <div :class="['button', btnIndex==3?'buttonIndex':'']" @click="btn(3)">YEARLY</div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <v-chart :options="polar"/>
                            </div>
                        </div>
                    </div>
                    <div v-if="index==3" class="chart">
                        <div class="item-title">企业数据API</div>
                        <div class="item-content">
                            <div class="item-data">
                                <div class="content-data">
                                    <div class="content-number">3,594</div>
                                    <div class="content-name">今日调用次数</div>
                                </div>
                                <div class="content-data margin-left-30">
                                    <div class="content-number">453</div>
                                    <div class="content-name color-green">今日剩余次数</div>
                                </div>
                                <div class="content-data margin-left-30">
                                    <div class="content-number">¥453</div>
                                    <div class="content-name color-red">今日超额费用</div>
                                </div>
                            </div>
                            <div class="item-chart">
                                <el-row type="flex" class="row-bg">
                                    <el-col :span="12">
                                        <div class="chart-title">历史调用统计图</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="chart-btn">
                                            <div :class="['button', btnIndex==1?'buttonIndex':'']" @click="btn(1)">WEEKLY</div>
                                            <div :class="['button', btnIndex==2?'buttonIndex':'']" @click="btn(2)">MONTLY</div>
                                            <div :class="['button', btnIndex==3?'buttonIndex':'']" @click="btn(3)">YEARLY</div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <v-chart :options="polar"/>
                            </div>
                        </div>
                    </div>
                    <div v-if="index==4" class="chart">
                        <div class="item-title">企业监控</div>
                        <div class="item-content">
                            <div class="item-data">
                                <div class="content-data">
                                    <div class="content-number">3,594</div>
                                    <div class="content-name">已监控企业数量</div>
                                </div>
                                <div class="content-data margin-left-30">
                                    <div class="content-number">453</div>
                                    <div class="content-name color-red">今日异常企业数量</div>
                                </div>
                            </div>
                            <div class="item-chart">
                                <el-row type="flex" class="row-bg">
                                    <el-col :span="12">
                                        <div class="chart-title">历史调用统计图</div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="chart-btn">
                                            <div :class="['button', btnIndex==1?'buttonIndex':'']" @click="btn(1)">WEEKLY</div>
                                            <div :class="['button', btnIndex==2?'buttonIndex':'']" @click="btn(2)">MONTLY</div>
                                            <div :class="['button', btnIndex==3?'buttonIndex':'']" @click="btn(3)">YEARLY</div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <v-chart height="250px" width="100%" :options="polar"/>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                index: 2,
                btnIndex:2,
                polar: {
                    lineStyle: {
                        color: '#1A91EB'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            show: false
                        },
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '$ {value}',
                            color: '#E6EAEE'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                    },
                    grid:{
                        left:60,
                        top:30,
                        right:40,
                        bottom:30,
                    },
                    series: [{
                        symbol: 'none',
                        data: [60, 100, 310, 90, 120, 410, 110, 150],
                        type: 'line',
                        areaStyle: {
                            color: '#E8F4FD'
                        }
                    }]
                }
            }
        },
        methods: {
            tabIndex(index) {
                this.index = index;
            },
            btn(index){
                this.btnIndex = index;
            }
        }
    }
</script>

<style scoped>
    .echarts{
        height: 250px;
        width: 100%;
    }
    .buttonIndex{
        background:linear-gradient(360deg,rgba(25,145,235,1) 0%,rgba(45,161,248,1) 100%);
        border-radius:35px;
        color:rgba(255,255,255,1) !important;
        padding: 5px 10px;
        width: 60px!important;
    }
    .section .chart .item-content .item-chart .row-bg .chart-btn .button{
        display: inline-block;
        text-align: center;
        font-size:12px;
        font-weight:500;
        cursor: pointer;
        width: 80px;
        color:rgba(127,143,164,1);
    }
    .section .chart .item-content .item-chart .row-bg .chart-btn {
        text-align: right;
        padding-right: 30px;
    }
    .section .chart .item-content .item-chart .row-bg .chart-title {
        font-size:22px;
        font-weight:500;
        color:rgba(53,64,82,1);
        padding-left: 30px;
        text-align: left;
    }

    .section .chart .item-content .item-chart .row-bg {
        margin-top: 20px;
    }

    .margin-left-30 {
        margin-left: 30px;
    }

    .color-green {
        color: #1BB934 !important;
    }

    .color-red {
        color: #F6323C !important;
    }

    .section .chart .item-content .item-data .content-data .content-number {
        height: 110px;
        line-height: 110px;
        font-size: 30px;
        font-weight: bold;
        border: 1px solid rgba(230, 234, 238, 1);
        color: rgba(53, 64, 82, 1);
    }

    .section .chart .item-content .item-data .content-data .content-name {
        height: 50px;
        line-height: 50px;
        border: 1px solid rgba(230, 234, 238, 1);
        background: rgba(245, 248, 250, 1);
        font-size: 14px;
        border-top: none;
        font-weight: 500;
        color: rgba(32, 151, 240, 1);
    }

    .section .chart .item-content .item-data .content-data {
        text-align: center;
        width: 176px;
        border-radius: 4px;
    }

    .section .chart .item-content .item-data {
        height: 160px;
        display: flex;
        margin-bottom: 24px;
    }

    .section .chart .item-content .item-chart {
        height: 320px;
        width: 903px;
        border-radius: 4px;
        border: 1px solid rgba(230, 234, 238, 1);
    }

    .section .chart .item-content {
        padding: 27px 30px 36px 30px;
    }

    .section .chart .item-title {
        text-align: left;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #E1E5ED;
        padding-left: 21px;
    }

    .section .chart {
        background: #ffffff;
        height: 618px;
        margin-bottom: 65px;
    }

    .section .json {
        height: 256px;
        background: #ffffff;
        margin-bottom: 427px;
    }

    .section .json .list-info {
        height: 70px;
        padding: 40px 0 25px 0;
    }

    .section .json .list-info .items {
        border-right: 1px solid rgba(225, 229, 237, 1);
    }

    .section .json .list-info .title {
        font-size: 14px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 24px;
    }

    .section .json .list-info .name {
        font-size: 14px;
        font-weight: 600;
        color: rgba(157, 169, 188, 1);
    }

    .section .json .list-info .number {;
        margin-left: 19px;
        font-size: 26px;
        font-weight: bold;
        color: rgba(16, 139, 237, 1);
    }

    .section .json .user-info .btn span {
        margin-left: 9px;
    }

    .section .json .user-info .btn span, img {
        vertical-align: middle;
    }

    .section .json .user-info .btn {
        margin-top: 15px;
        margin-left: 37px;
        line-height: 30px;
        width: 94px;
        height: 30px;
        background: linear-gradient(90deg, rgba(247, 169, 71, 1) 0%, rgba(237, 151, 36, 1) 100%);
        box-shadow: 0px 10px 14px 0px rgba(255, 145, 51, 0.2);
        border-radius: 16px;
        color: #FFFFFF;
    }

    .section .json .user-info .time {
        padding-left: 20px;
    }

    .section .json .user-info .time .date {
        font-size: 26px;
        font-weight: bold;
        color: rgba(250, 142, 2, 1);
    }

    .section .json .user-info .time .notice {
        font-size: 14px;
        font-weight: 500;
        color: rgba(157, 169, 188, 1);
        margin-top: 10px;
    }

    .section .json .user-info .company span, img {
        vertical-align: middle;
    }

    .section .json .user-info .company span {
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-left: 16px;
    }

    .section .json .user-info .company {
        text-align: left;
        margin-left: 30px;
        border-right: 1px solid rgba(225, 229, 237, 1);;
    }

    .section .json .user-info {
        height: 60px;
        padding: 30px 0;
        border-bottom: 1px solid rgba(225, 229, 237, 1);;
    }

    .section .menu-item span {
        margin-left: 26px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(16, 139, 237, 1);
    }

    .section .menu-item img {
        margin-left: 28px;
        vertical-align: middle;
    }

    .section .menu-item {
        cursor: pointer;
        text-align: left;
        height: 55px;
        margin-right: 20px;
        line-height: 55px;
        background: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
    }

    .section .menu {
        font-size: 14px;
        font-weight: 500;
        color: rgba(159, 169, 186, 1);
        text-align: left;
        height: 40px;
        line-height: 40px;
    }

    .section .menu .person {
        color: #999999;
    }

    .section .menu .account {
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
<template>
    <div class="bg">
        <div class="section">
            <div>
                <img class="header" src="@/assets/images/小banner@2x.png" alt=""  width="1220px" height="170px" >
                <div class="img-title">
                    <div class="first">服务全新升级</div>
                    <div class="second">一键导入，自主更新</div>
                </div>
            </div>
            <div class="about">
                <div class="title">联系我们</div>
                <el-row style="margin-top: 60px">
                    <el-col :span="9">
                        <div class="item">
                            <div class="icon"><img src="@/assets/images/洽谈@2x.png" alt=""  width="28px" height="25px" ><span>商务洽谈</span></div>
                            <div class="text">QQ<span style="margin-left: 10px">28420000</span> <span style="margin-left: 26px">工作时间</span> <span style="margin-left: 10px">工作日9:00-18:00</span></div>
                            <div class="text">客户电话   <span style="margin-left: 10px">400 000 0000</span></div>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="item-img">
                            <img src="@/assets/images/底部二维码.png" alt="" width="100px" height="100px">
                        </div>
                    </el-col>
                    <el-col :span="9">
                        <div class="item">
                            <div class="icon"><img src="@/assets/images/技术咨询@2x.png" alt="" width="28px" height="25px" ><span>技术咨询</span></div>
                            <div class="text">QQ<span style="margin-left: 10px">2398490808</span> <span style="margin-left: 26px">工作时间</span> <span style="margin-left: 10px">工作日9:00-21:00</span></div>
                            <div class="text">E-mail   <span style="margin-left: 10px">shubobo123@126.com</span></div>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="item-img">
                            <img src="@/assets/images/联系我们@2x.png" alt="" width="100px" height="100px">
                        </div>
                    </el-col>
                </el-row>
                <div class="info"><span style="margin-right: 10px">公司简介</span> 成都博薄科技有限公司，致力于为企业提供数据采集与分析服务；我们用可靠的服务和过硬的技术，全力协助您的企业更上一层楼！</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aboutUs"
    }
</script>

<style scoped>
    .item .icon img{
        vertical-align: middle;
    }
    .item .icon span{
        vertical-align: middle;
        margin-left: 10px;
        font-size: 20px;
    }
    .item .icon{
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .item .text{
        margin: 24px 0;
        font-size:14px;
        font-weight:500;
        color:rgba(159,169,186,1);
    }
    .item{
        text-align: left;
        margin-left: 100px;
    }
    .bg .about {
        margin-top: 15px;
        height: 443px;
        background: rgba(255, 255, 255, 1);
        padding-top: 60px ;
        margin-bottom: 60px;
    }
    .bg .about .title{
        font-size:24px;
        font-weight:500;
    }
    .bg .about .info{
        text-align: left;
        margin-left: 100px;
        margin-top: 60px;
        font-size:14px;
        font-weight:500;
        color:rgba(159,169,186,1);
    }
    .bg {
        background: rgba(245, 250, 254, 1);
    }

    .bg .section {
        height: 100%;
        width: 1220px;
        margin: 0 auto;
        position: relative;
    }

    .bg .section .img-title {
        font-family: PingFangSC-Regular;
        position: absolute;
        top: 30px;
        right: 173px;
    }

    .bg .section .img-title .first {
        font-size: 40px;
        font-weight: 500;
        color: rgba(250, 142, 2, 1);
    }

    .bg .section .img-title .second {
        margin-top: 5px;
        font-size: 28px;
        font-weight: 400;
        color: rgba(157, 117, 34, 1);
    }

    .bg .section .header {
        height: 170px;
    }
</style>
<template>
    <div class="footer">
        <div class="all">
            <el-row>
                <el-col :span="11">
                    <div class="golink">
                        <span>公司介绍</span>
                        <span class="about" @click="goToAbout">联系我们</span>
                    </div>
                    <div class="info">
                        <div>官方客户QQ：284200000</div>
                        <div>企业邮箱：shubobo123@126.com</div>
                        <div>公司地址：成都市锦江区东华正街42号广电仕百达国际大厦25楼</div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="phone">
                        <el-row>
                            <el-col :span="12">
                                <div>
                                    <img src="@/assets/images/底部二维码.png"  width="100px" height="100px" alt="">
                                    <div>商务洽谈</div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div>
                                    <img src="@/assets/images/联系我们@2x.png"  width="100px" height="100px" alt="">
                                    <div>技术咨询</div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div>
                        <div class="customer">客户电话（服务时间 8：00 - 18:00）</div>
                        <div class="tel">400-000-6618</div>
                        <div class="online">
                            <div class="btn">
                                <img src="@/assets/images/在线客服@2x.png" alt="" width="14px" height="14px"><span>在线客户</span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="border"></div>
        <div class="right">成都博薄科技有限公司 沪ICP备15020893号-1 Copyrigh@2014-2016 Shanghai Yidai Co.,Ltd.All Rights
            Reserved.
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFooter",
        methods:{
            goToAbout(){
                this.$router.push({path:'/aboutUs'})
            }
        }
    }
</script>

<style scoped>
    .footer .all .customer {
        font-size: 12px;
    }

    .footer .all .tel {
        font-size: 36px;
        margin-top: 10px;
        opacity: 0.8;
        color: rgba(255, 255, 255, 1);
    }
    .footer .all .online{
        margin: 20px auto 0;
    }
    .footer .all .online .btn img{
        vertical-align: middle;
        margin-right: 8px;
        margin-top:-2px;
    }
    .footer .all .online .btn{
        width:123px;
        height:30px;
        border-radius:15px;
        opacity:0.6;
        border:1px solid rgba(255,255,255,0.6);
        line-height: 30px;
        margin: 0 auto;
    }

    .footer .all .golink {
        text-align: left;
        font-size: 16px;
        font-weight: 400;
        color: #F6F6F6;
        opacity: 0.8;
    }

    .footer .all .golink .about {
        margin-left: 40px;
    }

    .footer .all .info {
        font-size: 12px;
        text-align: left;
        margin-top: 24px;
    }

    .footer .all .info div {
        margin-top: 10px;
    }

    .footer .all {
        color: rgba(120, 126, 142, 1);
        padding: 30px 0;
        height: calc(100% - 140px);
        width: 1220px;
        margin: 0 auto;
    }
    .border{
        height: 1px ;
        background: rgba(242, 242, 242, 1);
        opacity: 0.1;
    }
    .right {
        height: 79px;
        text-align: center;
        line-height: 79px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(120, 126, 142, 1);
    }

    .footer {
        height: 286px;
        background: rgba(34, 41, 55, 1);
    }
</style>
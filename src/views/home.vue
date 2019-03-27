<template>
    <div class="home">
        <div class="img"><img src="@/assets/images/banner.png" alt="" width="1920px" height="300px"></div>
        <div class="section">
            <el-row :gutter="20" style="height: 130px;">
                <el-col :span="6" class="item-col">
                    <div class="item">
                        <img src="@/assets/images/01@2x.png" class="item-img" alt="" width="71px" height="57px">
                        <div class="item-title">
                            <div class="first">每日新增推送</div>
                            <div class="second">快速发现新企业</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6" class="item-col">
                    <div class="item">
                        <img src="@/assets/images/02@2x.png" class="item-img" alt="" width="66px" height="52px">
                        <div class="item-title">
                            <div class="first">历史数据更新</div>
                            <div class="second">存量数据保持更新</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6" class="item-col">
                    <div class="item">
                        <img src="@/assets/images/03@2x.png" class="item-img" alt="" width="76px" height="56px">
                        <div class="item-title">
                            <div class="first">3个9稳定性</div>
                            <div class="second">API保持高可用</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6" class="item-col">
                    <div class="item">
                        <img src="@/assets/images/04@2x.png" class="item-img" alt="" width="53px" height="51px">
                        <div class="item-title">
                            <div class="first">定制服务</div>
                            <div class="second">根据客户需求定制</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="sections">
            <div class="first">
                <div class="width1220">
                    <el-row>
                        <el-col :span="13" style="padding: 78px 60px 78px 120px">
                            <div class="title">企业全量信息库</div>
                            <div class="list">
                                <div>1.全国1.8亿企业和组织机构实时全新全国数据</div>
                                <div>2.一键接入数据库，7*24小时不间断推送更新</div>
                                <div>3.用户中心实时查看推送状态</div>
                            </div>
                            <div class="btn"><div class="btn-font" @click="goToJson">点击查看详细数据</div></div>
                        </el-col>
                        <el-col :span="11">
                            <div class="big-img" style="padding: 27px 10px 32px 0"><img src="@/assets/images/001@2x.png" alt="" width="578px" height="361px"></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="second">
                <div class="width1220">
                    <el-row>
                        <el-col :span="11">
                            <div class="big-img"  style="padding: 25px 12px 33px 0"><img src="@/assets/images/002@2x.png" alt="" width="507px" height="354px"></div>
                        </el-col>
                        <el-col :span="13" style="padding: 78px 0px  78px 40px">
                            <div class="title">企业数据API</div>
                            <div class="list">
                                <div>1.年报、失信、执行、专利等30+维度数据API实时查询，无死角掌握企业各方信息</div>
                                <div>2.按量付费、包年包月，多方案供您选择</div>
                            </div>
                            <div class="btn"><div class="btn-font"  @click="goToJson">点击查看详细数据</div></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="first">
                <div class="width1220" style="height: 470px;">
                    <el-row>
                        <el-col :span="13" style="padding: 78px 60px  78px 120px">
                            <div class="title">企业监控</div>
                            <div class="list">
                                <div>1.7*24小时不间断监控指定企业信息</div>
                                <div>2.第一时间预警企业失信、被执行、涉诉、司法拍卖等信息</div>
                                <div>3. 监控企业负面新闻</div>
                            </div>
                            <div class="btn"><div class="btn-font"  @click="goToJson">点击查看详细数据</div></div>
                        </el-col>
                        <el-col :span="11">
                            <div class="big-img" style="padding: 38px 12px 50px 0"><img src="@/assets/images/003@2x.png" alt="" width="588px" height="382px"></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{
            goToJson(){
                this.$router.push({path: '/json'})
            }
        }
    }
</script>

<style scoped>
    .home .section {
        height: 100%;
        width: 1220px;
        margin: 0 auto;
    }
    .home .sections .first{
        background:rgba(245,250,254,1);
    }
    /*.home .sections .second .big-img{*/
        /*padding: 27px 10px 32px 0;*/
    /*}*/
    .home .sections .second .width1220{
        height: 420px;
        margin: 0 auto;
        width: 1220px;
    }
    .home .sections .second .width1220 .title{
        color: #FB9207;
        font-size: 32px;
        text-align: left;
    }
    .home .sections .second .width1220 .list{
        text-align: left;
        margin: 40px 0 30px 0;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(136,151,176,1);
    }
    .home .sections .second .width1220 .list div{
        margin: 5px 0;
    }
    .home .sections .second .width1220 .btn .btn-font{
        width:226px;
        cursor: pointer;
        height:42px;
        border-radius:4px;
        border:1px solid rgba(0,132,255,1);
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(16,139,237,1);
        line-height:38px;
    }

    /*.home .sections .first .big-img{*/
        /*padding: 0 10px 0 0;*/
    /*}*/
    .home .sections .first .width1220{
        height: 420px;
        margin: 0 auto;
        width: 1220px;
    }
    .home .sections .first .width1220 .title{
        color: #FB9207;
        font-size: 32px;
        text-align: left;
    }
    .home .sections .first .width1220 .list{
        text-align: left;
        margin: 40px 0 30px 0;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(136,151,176,1);
    }
    .home .sections .first .width1220 .list div{
        margin: 5px 0;
    }
    .home .sections .first .width1220 .btn .btn-font{
        cursor: pointer;
        width:226px;
        height:42px;
        border-radius:4px;
        border:1px solid rgba(0,132,255,1);
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(16,139,237,1);
        line-height:38px;
    }
    .home .sections {
        height: 100%;
    }
    .home .img {
        width: 100%;
        height: 300px;
        background: rgba(245,250,254,1);
    }

    .home .img img {
        max-width: 100%;
    }

    .section .item .item-title {
        display: inline-block;
        margin-left: 26px;
    }

    .section .item .first {
        color: #333333;
        font-size: 20px;
        margin-bottom: 10px;
        text-align: left;
    }

    .section .item .second {
        color: rgba(159, 169, 186, 1);
        font-size: 14px;
        text-align: left;
    }

    .section .item-col {
        align-items: center;
        height: 100%;
        display: flex;
    }
</style>
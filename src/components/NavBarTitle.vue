<template>
    <div class="navbartitle">
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="6" style="text-align: left">
                    <img class="logo" src="@/assets/images/logo@2x.png" alt="">
                </el-col>
                <el-col :span="12">
                    <el-menu :router="true" mode="horizontal" default-active="aboutUs">
                        <el-menu-item index="home">首页</el-menu-item>
                        <el-menu-item index="aboutUs">联系我们</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="6" style="text-align: right">
                    <div v-if="$route.name ==='info'" class="logined">
                        <img src="@/assets/images/个人-nav@2x.png" alt="" width="30px" height="30px">
                        <span>sophie</span>
                        <span class="line"></span>
                        <span @click="goToHome">退出</span>
                    </div>
                    <el-button v-else type="primary" round size="small" class="btn-login" @click="login"> 登录</el-button>
                </el-col>
            </el-row>
        </div>
        <el-dialog
                title="密码登录"
                :visible.sync="visibility"
                width="420px"
                top="360px"
                :show-close="false"
                center>
            <el-form :model="form" ref="form" :rules="formRules" class="formData">
                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="password">
                            <el-input type="password" v-model="form.password" placeholder="请输入登录密码">
                                <span slot="prefix"><img src="@/assets/images/密码.png" alt=""></span>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item prop="age">
                            <el-checkbox v-model="form.check">一周内保持登录状态</el-checkbox>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item prop="age">
                            <el-button type="primary" style="width: 100%;border-radius:100px;" @click="goToInfo">登录</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" style="text-align: center">
                        没有账号？
                        <el-button type="text" @click="goToAbout">联系我们</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "NavBarTitle",
        data() {
            return {
                visibility: false,
                form: {},
                formRules: {
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            login() {
                this.visibility = true;
            },
            goToHome(){
                this.$router.push({path: '/home'})
            },
            goToAbout() {
                this.visibility = false;
                this.$router.push({path: '/aboutUs'})
            },
            goToInfo(){
                this.visibility = false;
                this.$router.push({path: '/info'})
            }
        }
    }
</script>

<style lang="less">
    .navbartitle .content .logined{
        height: 70px;
        line-height: 70px;
    }
    .navbartitle .content .logined>img{
        vertical-align: middle;
    }
    .navbartitle .content .logined .line{
        display: inline-block;
        height: 30px;
        width: 1px;
        background: #E1E5ED;
    }
    .navbartitle .content .logined >span{
        margin-left: 10px;
        vertical-align: middle;
        font-size:14px;
        font-weight:400;
        color:rgba(151,151,151,1);
    }
    .formData {
        padding: 0 30px;
    }
    .navbartitle .el-dialog{
        border-radius:8px;
    }
    .formData .el-input__inner {
        border-radius: 100px;
    }
    .navbartitle .el-input__prefix img{
        margin-top: 10px;
    }
    .navbartitle .el-form-item .el-input__inner{
        border-color: #409EFF !important;
    }
    .navbartitle .el-input__prefix{
        left:15px;
    }

    /*.navbartitle .el-form-item__error{*/
        /*top: -25px;*/
    /*}*/
    .navbartitle .el-input--prefix .el-input__inner{
        padding-left: 40px;
    }
    .navbartitle {
        height: 70px;
    }

    .navbartitle .el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    .navbartitle .btn-login {
        margin-top: 21px;
        height: 29px;
        width: 60px;;
    }

    .navbartitle {
        border-bottom:1px solid rgba(225,229,237,1);
    }
    .navbartitle .logo {
        width: 168px;
        height: 39px;
        margin-top: 15px;
    }
    .navbartitle .content {
        height: 100%;
        width: 1220px;
        margin: 0 auto;
    }
</style>
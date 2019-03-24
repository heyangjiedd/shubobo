<template>
    <div class="bg">
        <div class="section">
            <el-row>
                <el-col :span="5">
                    <div>
                        <div class="menu">菜单</div>
                        <el-menu
                                default-active="0">
                            <el-menu-item :index="index+''" v-for="(item,index) in data" :key="item">
                                <span slot="title">{{item}}</span>
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="19">
                    <pre class="json" id="json"></pre>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "json",
        mounted(){
            console.log($('#json'))
            var data = {
                "foobar": "foobaz"
            };
            $('#json').jsonViewer(data);
        },
        data() {
            return {
                data: ['基本信息', '股东信息', '主要成员', '对外投资', '历史变更', '商标信息', '软件著作权', '执行人', '年报']
            }
        }
    }
</script>

<style scoped>
    .el-menu{
        background: rgba(245, 250, 254, 1);
    }
    .el-menu-item.is-active{
        background: #108BEDFF;
        color: #ffffff;
    }
    .el-menu-item{
        text-align: left;
        padding-left: 50px !important;
    }
    .section .menu{
        font-size:18px;
        font-weight:500;
        color:rgba(159,169,186,1);
        text-align: left;
        margin: 0 0 10px 20px;
    }
    .section .json {
        height: 674px;
        background: #ffffff;
    }

    .bg {
        background: rgba(245, 250, 254, 1);
    }

    .section {
        height: 100%;
        width: 1220px;
        padding: 10px 0 315px 0;
        margin: 0 auto;
    }
</style>
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
    import jsonViewer from './../../static/json-viewer/jquery.json-viewer'

    export default {
        name: "json",
        mounted() {
            const pre = {
                "total": 1,
                "message": "",
                "zip": 0,
                "route": "",
                "enctypt": 0,
                "data": [{
                    "REGION_ID": "370200",
                    "APPROVALTYPE": "1",
                    "ITEMNO": "370200",
                    "FINIXORGID": "370200",
                    "34":{
                        "REGION_ID": "370200",
                        "APPROVALTYPE": "1",
                        "ITEMNO": "370200",
                        "FINIXORGID": "370200",
                    },
                },],
                "state": 1
            };
            $('#json').jsonViewer(pre);
        },
        data() {
            return {
                data: ['基本信息', '股东信息', '主要成员', '对外投资', '历史变更', '商标信息', '软件著作权', '执行人', '年报']
            }
        }
    }
</script>

<style scoped>
    .el-menu-item, .el-submenu__title {
        height: 30px;
        line-height: 30px;
    }

    .el-menu {
        background: rgba(245, 250, 254, 1);
        margin-right: 20px;
        border-right: none;
    }

    .el-menu-item.is-active {
        background: #108BEDFF;
        color: #ffffff;
    }

    .el-menu-item {
        text-align: left;
        padding-left: 50px !important;
    }

    .section .menu {
        font-size: 18px;
        font-weight: 500;
        color: rgba(159, 169, 186, 1);
        text-align: left;
        margin: 0 0 10px 20px;
    }

    .section .json {
        text-align: left;
        height: 674px;
        background: #ffffff;
    }

    .bg {
        background: rgba(245, 250, 254, 1);
    }

    .section {
        height: 100%;
        width: 1220px;
        padding: 20px 0 315px 0;
        margin: 0 auto;
    }
</style>
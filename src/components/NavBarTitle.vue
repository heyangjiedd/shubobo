<template>
    <el-menu :router="true"  mode="horizontal" default-active="home">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="aboutUs">关于我们</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "NavBarTitle"
    }
</script>

<style scoped >
    .content{

    }
</style>
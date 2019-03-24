<template>
  <div id="app">
    <NarBarTitle></NarBarTitle>
    <router-view/>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
    import NarBarTitle from './components/NavBarTitle'
    import HomeFooter from './components/HomeFooter'

    export default {
        name: 'app',
        components: {
            NarBarTitle,
            HomeFooter
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    height: 100%;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }
</style>

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ECharts from 'vue-echarts/components/ECharts.vue'

Vue.use(ElementUI);
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')

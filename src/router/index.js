import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const routes = [
    {
        path: '/home',
        component: () => import('@/views/home'),
        hidden: true
    },
    {
        path: '/aboutUs',
        component: () => import('@/views/aboutUs'),
        hidden: true
    },
    {
        path: '/info',
        component: () => import('@/views/info'),
        hidden: true
    },
    {
        path: '/json',
        component: () => import('@/views/json'),
        hidden: true
    },
    {
        path: '',//设置首页
        redirect: '/home',
        hidden: true
    }
];
export default new Router({
    routes
})
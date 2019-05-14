import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const routes = [
    {
        path: '/',
        name:'index',
        component: () => import('@/views/index'),
        hidden: true
    },
    {
        path: '/home',
        name:'home',
        component: () => import('@/views/home'),
        hidden: true
    },
    {
        path: '/aboutUs',
        name:'about',
        component: () => import('@/views/aboutUs'),
        hidden: true
    },
    {
        path: '/info',
        name:'info',
        component: () => import('@/views/info'),
        hidden: true
    },
    {
        path: '/json',
        name:'json',
        component: () => import('@/views/json'),
        hidden: true
    },
    {
        path: '',//设置首页
        redirect: '/',
        hidden: true
    }
];
export default new Router({
    routes
})
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from "@/views/index";
import profile from "@/views/profile";
import product from "@/views/product";
import news from "@/views/news";
import newsDetail from "@/views/newsDetail";
import join from "@/views/join";
import contact from "@/views/contact";

const routes = [
    {
        path: '/',
        component: index,
        name: 'index'
    },
    {
        path: '/profile',
        component: profile,
        name: 'profile'
    },
    {
        path: '/product',
        component: product,
        name: 'product'
    },
    {
        path: '/news',
        component: news,
        name: 'news'
    },
    {
        path: '/newsDetail',
        component: newsDetail,
        name: 'newsDetail'
    },
    {
        path: '/join',
        component: join,
        name: 'join'
    },
    {
        path: '/contact',
        component: contact,
        name: 'contact'
    },
]

const router = new VueRouter({
    routes
})

export default router
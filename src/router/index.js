//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);
//引入路由组件

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
// 重写push和replace
//将push方法进行封装，避免重复点击报错
//先备份
let originPush = VueRouter.prototype.push;
//
let originReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location,resolve, reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};
// import  Home from '@/pages/Home'
//配置路由，首先暴露
let router = new VueRouter(

    {
        //配置路由规则
        routes: [
            {
                path: "/home",
                component: Home,
                meta: { show: true },

            },
            {
                path: "/login",
                component: Login,
                meta: { show: false }
            },
            {
                path: "/search/:keyword?",
                component: Search,
                meta: { show: true },
                name: "search",
                props: ($route) => ({
                    keyword: $route.params.keyword,
                }),
            },
            {
                path: "/register",
                component: Register,
                meta: { show: false }
            },
            {
                path: "*",
                redirect: "/Home", //一上来就展示首页
            },
        ]

    }
)

export default router
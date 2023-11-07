import Vue from 'vue'
import App from './App.vue'
//三级联动的组件,注册为全局组件
import TypeNav from "@/pages/Home/TypeNav/index.vue"
// 第一个参数组件的名字,第二个参数哪一个组件
Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from '@/router'
// 引入vuex
import store from "@/store";
Vue.config.productionTip = false
// import {reqCategoryList} from './api/index';
// reqCategoryList();

new Vue({
  render: h => h(App),
  //注册路由,k v一致，省略v
  //注册路由，此时组件中都会拥有$router $route属性
  router,
  //注册store,此时组件中都会拥有$store
  store,
}).$mount('#app')

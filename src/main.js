import Vue from 'vue'
import App from './App.vue'
//三级联动的组件,注册为全局组件
import TypeNav from "@/components/TypeNav/index.vue"
// 分页器--全局组件
import Pagination from "@/components/pagnation/index.vue";
//引入全局组件Carousel
import Carousel from "@/components/Carousel";
// 第一个参数组件的名字,第二个参数哪一个组件
Vue.component(TypeNav.name, TypeNav);

Vue.component(Pagination.name, Pagination);

Vue.component(Carousel.name,Carousel);

//引入路由
import router from '@/router'
// 引入vuex
import store from "@/store";

// 引入swiper
import "swiper/css/swiper.css";
Vue.config.productionTip = false
// import {reqCategoryList} from './api/index';
// reqCategoryList();
//引入MockServe.js mock 数据
import "@/mock/mockServe"
new Vue({
  render: h => h(App),
  //注册路由,k v一致，省略v
  //注册路由，此时组件中都会拥有$router $route属性
  router,
  //注册store,此时组件中都会拥有$store
  store,
}).$mount('#app')

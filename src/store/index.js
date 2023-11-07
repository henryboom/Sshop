// 引入vue
import Vue from "vue";
// 引入vuex
import Vuex from "vuex";


Vue.use(Vuex)
import home from "./home";
// 对外暴露一个store类的实例
export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules: {
        home,
    },
});

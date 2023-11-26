//search模块的小仓库

import { reqGetSearchInfo } from "@/api/index";
const state = {
    //仓库数据 初始状态
    searchList:{},
    	
    	
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList;

    }
};
const actions = {
    // 获取搜索数据
    async getSearchList({commit},params ={}){
        let result =await reqGetSearchInfo(params);
        if(result.code=200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};


    //计算属性
    //项目当中getters主要的作用是：简化仓库中的数据（简化数据而生）
    //可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
        //当前形参state，当前仓库中的state，并非大仓库中的那个state
        goodsList(state) {
            return state.searchList.goodsList || []
        },
        attrsList(state) {
            return state.searchList.attrsList || []
        },
        trademarkList(state) {
            return state.searchList.trademarkList || []
        }
};
export default{//上面写完仍是常量（对象），需对外暴露别的模块才能使用
    state,
    mutations,
    actions,
    getters
}
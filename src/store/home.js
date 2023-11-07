// home模块的小仓库
// 引入reqCategoryList
import { reqCategoryList,reqGetBannerList,reqGetFloorList } from '@/api/index'
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
    count: 1,
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
        state.categoryList.length = 16;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList;

    },
    	
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;

    }
    ,
    	
    increment (state) {
        // 变更状态
        state.count=state.count+1
      }
    ,
    decrement (state) {
        // 变更状态
        state.count--
      }
    }
//书写逻辑，也可以处理异步
const actions = {

    add({commit}){
        commit("increment")
    },
    decrement({commit}){
        commit("decrement");

    },
    async categoryList({ commit }) {
        // console.log('in categoryList');
        
        let result = await reqCategoryList();
        // console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    	
    async getBannerList({ commit }) {
        // console.log('in getBannerList');
        
        let result = await reqGetBannerList();
        // console.log(result);
        if (result.code == 200) {
            commit("BANNERLIST", result.data);
        }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result= await reqGetFloorList();
        if (result.code == 200) {
            //格式化转换为json
            // console.log(JSON.stringify(result.data, null, 2));
            
            commit("GETFLOORLIST", result.data);

            
        }
    }
}

//理解为计算属性，用于简化仓库数据，让组件获取仓库的值更加方便
const getters = {}
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
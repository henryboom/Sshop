// home模块的小仓库
// 引入reqCategoryList
import { reqCategoryList } from '@/api/index'
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

    }
}
//书写逻辑，也可以处理异步
const actions = {
    async categoryList() {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST",result.data)
        }
    }
}

//理解为计算属性，用于简化仓库数据，让组件获取仓库的值更加方便
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}
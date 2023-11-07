//在当前模块对于api进行统一管理
import requests from "./request";
// 引入封装的mockaxios
import mockRequests from "./mockAjax";
//三级联动
//异步操作
export const reqCategoryList = async () => {
    try {
        const response = await requests.request({ url: '/product/getBaseCategoryList', method: 'get' });
        // console.log(response);
        return response; // 返回响应数据部分
    } catch (error) {
        console.error('请求失败：', error);
        throw error; // 抛出错误以便上层处理
    }
};
//请求搜索的数据回调
export const reqGetSearchInfo = (params) =>
    requests({
        url: "/list",
        method: "post",
        data: params,//当前这个接口，给服务器传递参数params，至少是一个空对象
    })

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get("/banner");

// /api/product/getBasecategoryList get 无参数
//发请求：axios发请求返回结果Promise对象
export const reqGetFloorList = () => mockRequests.get("/floor");

// export const  reqCategoryList = () => requests.get("/product/getBaseCategoryList") ;

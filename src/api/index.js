//在当前模块对于api进行统一管理
import requests from "./request";
//三级联动
//异步操作
// export const reqCategoryList = async () => {
//     try {
//         const response = await requests.request({ url: '/product/getBaseCategoryList', method: 'get' });
//         console.log(response);
//     } catch (error) {
//         console.error('请求失败：', error);
//     }
// };
// /api/product/getBasecategoryList get 无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests.get("/product/getBaseCategoryList");

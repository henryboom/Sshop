//封装axios
import axios from "axios"

import nprogress from "nprogress";
//同时引入nprogress的样式
import "nprogress/nprogress.css"


//start进度条开始
//对外暴露
//1.创建axios示例
const requests = axios.create(
    {
        //配置对象
        baseURL: '/api', //基础路径发送请求的时候就不用配置api了
        timeout: 5000, //代表超时时间5s
    }
)
//请求拦截
requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use((config)=>{
    nprogress.done();
    return config;

});

export default requests;
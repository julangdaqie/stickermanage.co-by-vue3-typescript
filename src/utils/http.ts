import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Message } from 'element-ui';
import { config } from 'vue/types/umd';

//创建axios的实例
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.1.5:9999' : 'https://sticker-api.gs-souvenir.com',//线上api前缀 https://sticker.gs-souvenir.com
    timeout: 10000 //超时时间
});

//请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (err: any) => {
    Promise.reject(err);
})

//响应拦截
service.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (err: any) => {
    let errMsg = "";
    if (err && err.data.ret) {
        switch (err.data.ret) {
            // case 400: errMsg = '请求错误(400)'; break;
            case 401: errMsg = "登陆失效,请重新登陆"; break;
            // case 403: errMsg = '拒绝访问(403)'; break;
            // case 404: errMsg = '请求出错(404)'; break;
            // case 408: errMsg = '请求超时(408)'; break;
            // case 500: errMsg = '服务器错误(500)'; break;
            // case 501: errMsg = '服务未实现(501)'; break;
            // case 502: errMsg = '网络错误(502)'; break;
            // case 503: errMsg = '服务不可用(503)'; break;
            // case 504: errMsg = '网络超时(504)'; break;
            // case 505: errMsg = 'HTTP版本不受支持(505)'; break;
            // default: errMsg = err.data.msg;
        }
    } else {
        errMsg = err
    }
    Message.error(errMsg);
    return Promise.reject(errMsg)
})
export default service;
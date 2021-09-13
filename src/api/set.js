import request from '@/utils/request';

//获取网站基本设置
const getWebsiteInfo = function(data) {
  return request({
    url: '/manage/set/getWebsiteInfo',
    method: 'post',
    data
  })
}

//设置网站基本设置
const setWebsiteInfo = function(data) {
  return request({
    url: '/manage/set/setWebsiteInfo',
    method: 'post',
    data
  })
}

//快递列表
const getShipping = function(data) {
  return request({
    url: '/manage/set/getShipping',
    method: 'post',
    data
  })
}

const setApi = {
  getWebsiteInfo,
  setWebsiteInfo,
  getShipping
}

export default setApi


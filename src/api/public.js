import request from '@/utils/request';

//尺寸表
const getProductConfig = function (data) {
  return request({
    url: '/api/product/getProductConfig',
    method: 'post',
    data
  })
}

//oss图片上传
const uploadImage = function (data,progressFn) {
  return request({
    url: 'https://sticker-api.gs-souvenir.com/oss/uploadImage',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress:progressFn,
    data
  })
}

const uploadFile = function (data) {
  return request({
    url: '/oss/uploadFile',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}

//获取国家
const getCountry = function (data) {
  return request({
    url: '/manage/set/getcountry',
    method: 'post',
    data
  })
}

//获取省份
const getState = function (data) {
  return request({
    url: '/manage/set/getCountryState',
    method: 'post',
    data
  })
}

//获取快递
const getShipping = function (data) {
  return request({
    url: '/manage/set/getShipping',
    method: 'post',
    data
  })
}

const publicApi = {
  getProductConfig,
  uploadImage,
  uploadFile,
  getCountry,
  getState,
  getShipping
}

export default publicApi


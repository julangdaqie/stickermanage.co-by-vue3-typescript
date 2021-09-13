import request from '@/utils/request';

//快递列表
const getShipping = function (data) {
  return request({
    url: '/manage/set/getShipping',
    method: 'post',
    data,
  })
}

//快递添加
const addShipping = function (data) {
  return request({
    url: '/manage/set/addShipping',
    method: 'post',
    data,
  })
}

//快递分区列表
const getShippingAreaList = function (data) {
  return request({
    url: '/manage/set/getShippingAreaList',
    method: 'post',
    data,
  })
}

//添加快递分区
const addShippingArea = function (data) {
  return request({
    url: '/manage/set/addShippingArea',
    method: 'post',
    data,
  })
}

//获取快递分区详细
const getShippingAreaInfo = function (data) {
  return request({
    url: '/manage/set/getShippingAreaInfo',
    method: 'post',
    data,
  })
}

//修改快递
const modShipping = function (data) {
  return request({
    url: '/manage/set/modShipping',
    method: 'post',
    data,
  })
}

//修改快递分区详细
const modShippingAreaInfo = function (data) {
  return request({
    url: '/manage/set/modShippingAreaInfo',
    method: 'post',
    data,
  })
}

//修改快递分区
const modShippingArea = function (data) {
  return request({
    url: '/manage/set/modShippingArea',
    method: 'post',
    data,
  })
}

//删除快递
const deleteShipping = function (data) {
  return request({
    url: '/manage/set/deleteShipping',
    method: 'post',
    data,
  })
}

//删除快递分区
const deleteShippingArea = function (data) {
  return request({
    url: '/manage/set/deleteShippingArea',
    method: 'post',
    data,
  })
}

//是否启用快递
const setShippingIsUsed = function (data) {
  return request({
    url: '/manage/set/set_ShippingIsUsed',
    method: 'post',
    data,
  })
}


const freightApi = {
  getShipping,
  addShipping,
  getShippingAreaList,
  addShippingArea,
  getShippingAreaInfo,
  modShipping,
  modShippingAreaInfo,
  modShippingArea,
  deleteShipping,
  deleteShippingArea,
  setShippingIsUsed
}

export default freightApi

import request from '@/utils/request';

//启用省份
const IsCountryHasState = function (data) {
  return request({
    url: '/manage/set/setCountryHasState',
    method: 'post',
    data,
  })
}

//获取国家省份
const getCountryState = function (data) {
  return request({
    url: '/manage/set/getCountryState',
    method: 'post',
    data,
  })
}

//添加省份
const addCountryState = function (data) {
  return request({
    url: '/manage/set/addCountryState',
    method: 'post',
    data,
  })
}

//更新省份
const updateCountryState = function (data) {
  return request({
    url: '/manage/set/updateCountryState',
    method: 'post',
    data,
  })
}

//添加国家信息
const addCountry = function (data) {
  return request({
    url: '/manage/set/addCountry',
    method: 'post',
    data,
  })
}

//删除省份
const delCountryState = function (data) {
  return request({
    url: '/manage/set/delCountryState',
    method: 'post',
    data,
  })
}

//获取所有的国家及对应货币
const getCountryInfo = function (data) {
  return request({
    url: '/manage/set/getCountryInfo',
    method: 'post',
    data,
  })
}

//获取所有的国家
const getcountry = function (data) {
  return request({
    url: '/manage/set/getcountry',
    method: 'post',
    data,
  })
}

//删除国家
const delCountry = function (data) {
  return request({
    url: '/manage/set/delCountry',
    method: 'post',
    data,
  })
}

//更新国家
const updateCountry = function (data) {
  return request({
    url: '/manage/set/updateCountry',
    method: 'post',
    data,
  })
}

//更改国家启用状态
const startUsingCountry = function (data) {
  return request({
    url: '/manage/set/changeCountryStatus',
    method: 'post',
    data,
  })
}

//更改国家热门状态
const isHotCountry = function (data) {
  return request({
    url: '/manage/set/isHotCountry',
    method: 'post',
    data,
  })
}

//设置国家默认
const IsDefaultCountry = function (data) {
  return request({
    url: '/manage/set/setDefaultCountry',
    method: 'post',
    data,
  })
}

//运费开启关闭
const editCountryFreightFree = function (data) {
  return request({
    url: '/manage/set/editCountryFreightFree',
    method: 'post',
    data,
  })
}

const countryApi = {
  IsCountryHasState,
  getCountryState,
  addCountryState,
  updateCountryState,
  addCountry,
  delCountryState,
  getCountryInfo,
  getcountry,
  delCountry,
  updateCountry,
  startUsingCountry,
  isHotCountry,
  IsDefaultCountry,
  editCountryFreightFree
}

export default countryApi

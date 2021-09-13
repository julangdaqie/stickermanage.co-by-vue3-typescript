import request from '@/utils/request';

//更新货币汇率
const updateCurrency = function (data) {
  return request({
    url: '/manage/set/updateCurrencyInfo',
    method: 'post',
    data,
  })
}

//添加货币
const addCurrency = function (data) {
  return request({
    url: '/manage/set/addCurrency',
    method: 'post',
    data,
  })
}

//删除货币
const delCurrency = function (data) {
  return request({
    url: '/manage/set/delCurrency',
    method: 'post',
    data,
  })
}

//启用货币
const changeCurrencyStatus = function (data) {
  return request({
    url: '/manage/set/changeCurrencyStatus',
    method: 'post',
    data,
  })
}

//设置货币是否网站默认货币
const setDefaultCurrency = function (data) {
  return request({
    url: '/manage/set/setDefaultCurrency',
    method: 'post',
    data,
  })
}

//设置货币是否为后台默认货币
const setManageDefaultCurrency = function (data) {
  return request({
    url: '/manage/set/setManageDefaultCurrency',
    method: 'post',
    data,
  })
}

//获取货币信息
const getAllCurrency = function (data) {
  return request({
    url: '/manage/set/getAllCurrency',
    method: 'post',
    data,
  })
}

const exchangeApi = {
  updateCurrency,
  addCurrency,
  delCurrency,
  changeCurrencyStatus,
  setDefaultCurrency,
  setManageDefaultCurrency,
  getAllCurrency
}

export default exchangeApi
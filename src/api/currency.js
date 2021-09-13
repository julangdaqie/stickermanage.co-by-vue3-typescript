import request from '@/utils/request';

//获取货币信息
const getCurrencyInfo = function (data) {
  return request({
    url: '/manage/set/getAllCurrency',
    method: 'post',
    data,
  })
}

//启用货币
const enabledCurrency = function (data) {
  return request({
    url: '/manage/set/changeCurrencyStatus',
    method: 'post',
    data,
  })
}

//设置货币是否网站默认货币
const defaultCurrency = function (data) {
  return request({
    url: '/manage/set/setDefaultCurrency',
    method: 'post',
    data,
  })
}

//设置货币是否为后台默认货币
const manageDefaultCurrency = function (data) {
  return request({
    url: '/manage/set/setManageDefaultCurrency',
    method: 'post',
    data,
  })
}

//更新货币汇率
const updateCurrency = function (data) {
  return request({
    url: '/manage/set/updateCurrencyInfo',
    method: 'post',
    data,
  })
}

//删除货币信息
const delCurrency = function (data) {
  return request({
    url: '/manage/set/delCurrency',
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

const currencyApi = {
  getCurrencyInfo,
  enabledCurrency,
  defaultCurrency,
  manageDefaultCurrency,
  updateCurrency,
  delCurrency,
  addCurrency
}

export default currencyApi

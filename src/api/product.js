import request from '@/utils/request';

//获取产品分类列表
const getProductCateList = function (data) {
  return request({
    url: 'manage/product/getProductCateList',
    method: 'post',
    data
  })
}

//添加或者修改产品分类
const editProductCate = function (data) {
  return request({
    url: 'manage/product/editProductCate',
    method: 'post',
    data
  })
}

//获取分类详情
const getProductCateById = function (data) {
  return request({
    url: 'manage/product/getProductCateById',
    method: 'post',
    data
  })
}

//删除产品分类
const deleteProductCategoryById = function (data) {
  return request({
    url: 'manage/product/deleteProductCategoryById',
    method: 'post',
    data
  })
}

//获取定制产品列表
const getCustomProductList = function (data) {
  return request({
    url: 'manage/Product/getCustomProductList',
    method: 'post',
    data
  })
}

//删除一个定制产品
const delCustomProduct = function (data) {
  return request({
    url: 'manage/product/delCustomProduct',
    method: 'post',
    data
  })
}

//通过id获取定制产品详情
const getCustomProductInfo = function (data) {
  return request({
    url: 'manage/Product/getCustomProductInfo',
    method: 'post',
    data
  })
}

//添加一个定制产品
const editCustomProduct = function (data) {
  return request({
    url: 'manage/product/editCustomProduct',
    method: 'post',
    data,
  })
}

//添加一个定制产品
const updateCustomProduct = function (data) {
  return request({
    url: 'manage/product/update_CustomProduct',
    method: 'post',
    data
  })
}

//根据产品分类id获取产品分类配置
const getProductParam = function (data) {
  return request({
    url: 'manage/product/getProductParam',
    method: 'post',
    data
  })
}

//获取产品分类价格
const getProductPrice = function (data) {
  return request({
    url: 'manage/product/getProductPrice',
    method: 'post',
    data
  })
}

//删除产品分类价格
const deleteProductPrice = function (data) {
  return request({
    url: 'manage/product/deleteProductPrice',
    method: 'post',
    data
  })
}

//添加或更新产品分类价格
const editProductPrice = function (data) {
  return request({
    url: 'manage/product/editProductPrice',
    method: 'post',
    data
  })
}

//删除产品配置
const deleteProductParam = function (data) {
  return request({
    url: 'manage/product/deleteProductParam',
    method: 'post',
    data
  })
}

//添加产品配置
const editProductParam = function (data) {
  return request({
    url: 'manage/product/editProductParam',
    method: 'post',
    data
  })
}

//产品分类排序
const setProductCategorySort = function (data) {
  return request({
    url: 'manage/Product/setProductCategorySort',
    method: 'post',
    data
  })
}

//添加编辑自定义产品
const editCustomProductList = function (data) {
  return request({
    url: 'manage/Product/editCustomProductList',
    method: 'post',
    data
  })
}
//删除自定义产品
const deleteCustomProductList = function (data) {
  return request({
    url: 'manage/Product/deleteCustomProductList',
    method: 'post',
    data
  })
}

//获取同级小分类列表
const getSameLevelProduct = function (data) {
  return request({
    url: 'manage/Product/getSameLevelProduct',
    method: 'post',
    data
  })
}

const addCustomProductList = function (data) {
  return request({
    url: 'manage/Product/addCustomProductList',
    method: 'post',
    data
  })
}



const productApi = {
  getProductCateList,
  deleteProductCategoryById,
  editProductCate,
  getProductCateById,
  getCustomProductList,
  delCustomProduct,
  getCustomProductInfo,
  editCustomProduct,
  updateCustomProduct,
  getProductParam,
  getProductPrice,
  deleteProductPrice,
  editProductPrice,
  deleteProductParam,
  editProductParam,
  setProductCategorySort,
  editCustomProductList,
  deleteCustomProductList,
  getSameLevelProduct,
  addCustomProductList
}

export default productApi


import request from '@/utils/request';

//获取颜色列表
const getColorData = function(data) {
  return request({
    url: 'manage/set/getColor',
    method: 'post',
    data
  })
}

//获取所有分类
const getAllSampleCategory = function(data) {
  return request({
    url: 'manage/sample/getAllSampleCategory',
    method: 'post',
    data
  })
}

//获取模板分类
const getSampleCategory = function(data) {
  return request({
    url: 'manage/sample/getSampleCategory',
    method: 'post',
    data
  })
}

//添加修改模板分类
const editSampleCategory = function(data) {
  return request({
    url: 'manage/sample/editSampleCategory',
    method: 'post',
    data
  })
}

//删除模板分类
const deleteSampleCategory = function(data) {
  return request({
    url: 'manage/sample/deleteSampleCategory',
    method: 'post',
    data
  })
}

//添加或者编辑模板
const editSample = function(data) {
  return request({
    url: 'manage/sample/editSample',
    method: 'post',
    data
  })
}

//删除模板
const deleteSample = function(data) {
  return request({
    url: 'manage/sample/deleteSample',
    method: 'post',
    data
  })
}

//移动模板
const moveSample = function(data) {
  return request({
    url: 'manage/sample/moveSample',
    method: 'post',
    data
  })
}

//复制模板
const copySample = function(data) {
  return request({
    url: 'manage/sample/copySample',
    method: 'post',
    data
  })
}

//获取模板
const getSample = function(data) {
  return request({
    url: 'manage/sample/getSample',
    method: 'post',
    data
  })
}

//根据产品分类名称获取所有标签分类以及标签
const getTag = function(data) {
  return request({
    url: 'manage/sample/getTag',
    method: 'post',
    data
  })
}

//获取模板详情
const getSampleInfo = function(data) {
  return request({
    url: 'manage/sample/getSampleInfo',
    method: 'post',
    data
  })
}

//获取用户模板分类
const getUserSampleCategory = function(data) {
  return request({
    url: 'manage/sample/getUserSampleCategory',
    method: 'post',
    data
  })
}

//编辑用户模板分类
const editUserSampleCategory = function(data) {
  return request({
    url: 'manage/sample/editUserSampleCategory',
    method: 'post',
    data
  })
}

//删除用户模板分类
const deleteUserSampleCategory = function(data) {
  return request({
    url: 'manage/sample/deleteUserSampleCategory',
    method: 'post',
    data
  })
}

//获取用户模板列表
const getUserSample = function(data) {
  return request({
    url: 'manage/sample/getUserSample',
    method: 'post',
    data
  })
}

//获取用户模板详情
const getUserSampleInfo = function(data) {
  return request({
    url: 'manage/sample/getUserSampleInfo',
    method: 'post',
    data
  })
}

//编辑用户模板
const editUserSample = function(data) {
  return request({
    url: 'manage/sample/editUserSample',
    method: 'post',
    data
  })
}

//删除用户模板
const deleteUserSample = function(data) {
  return request({
    url: 'manage/sample/deleteUserSample',
    method: 'post',
    data
  })
}

//获取元素分类
const getElementCategory = function(data) {
  return request({
    url: 'manage/Element/getElementCategory',
    method: 'post',
    data
  })
}

//根据分类获取元素
const getElement = function(data) {
  return request({
    url: 'manage/Element/getElement',
    method: 'post',
    data
  })
}

//删除元素
const deleteElement = function(data) {
  return request({
    url: 'manage/Element/deleteElement',
    method: 'post',
    data
  })
}

//添加元素
const addElement = function(data) {
  return request({
    url: 'manage/Element/addElement',
    method: 'post',
    data
  })
}

//修改元素
const updateElement = function(data) {
  return request({
    url: 'manage/Element/updateElement',
    method: 'post',
    data
  })
}

//更新或者添加元素分类
const editElementCategory = function(data) {
  return request({
    url: 'manage/Element/editElementCategory',
    method: 'post',
    data
  })
}

//删除元素分类
const delElementCategory = function(data) {
  return request({
    url: 'manage/Element/delElementCategory',
    method: 'post',
    data
  })
}

//获取模板效果
const getStyleType = function(data) {
  return request({
    url: 'manage/product/getStyleType',
    method: 'post',
    data
  })
}

//分类管理拖拽排序
const updateSampleCategorySort = function(data) {
    return request({
        url: 'manage/sample/updateSampleCategorySort',
        method: 'post',
        data
    })
}
//更新元素分类排序
const updateElementCategorySort = function(data) {
    return request({
        url: 'manage/Element/updateElementCategorySort',
        method: 'post',
        data
    })
}
const dzApi = {
  getColorData,
  getAllSampleCategory,
  getSampleCategory,
  editSampleCategory,
  deleteSampleCategory,
  editSample,
  deleteSample,
  moveSample,
  copySample,
  getSample,
  getTag,
  getSampleInfo,
  getUserSampleCategory,
  editUserSampleCategory,
  deleteUserSampleCategory,
  getUserSample,
  getUserSampleInfo,
  editUserSample,
  deleteUserSample,
  getElementCategory,
  getElement,
  deleteElement,
  addElement,
  updateElement,
  editElementCategory,
  delElementCategory,
  updateSampleCategorySort,
  updateElementCategorySort,
  getStyleType,
}

export default dzApi


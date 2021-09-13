import request from '@/utils/request';

//获取用户详情
const getInquiryUserCategory = function (data) {
  return request({
    url: '/manage/Allocation/getInquiryManageUserAllocationSettings',
    method: 'post',
    data,
  })
}

//更新用户详情
const updateInquiryCateGory = function (data) {
  return request({
    url: '/manage/Allocation/updateInquiryCateGory',
    method: 'post',
    data,
  })
}

//更新排序 询盘
const updateInquirySort = function (data) {
  return request({
    url: '/manage/Allocation/updateInquirySort',
    method: 'post',
    data,
  })
}

//添加用户到当前分类
const setInquiryUserCategory = function (data) {
  return request({
    url: '/manage/Allocation/setInquiryUserCategory',
    method: 'post',
    data,
  })
}

//删除用户
const deleteInquiryUserCategory = function (data) {
  return request({
    url: '/manage/Allocation/deleteInquiryManageUserAllocation',
    method: 'post',
    data,
  })
}

//获取询盘可分配用户
const getInquiryAllocationUser = function (data) {
  return request({
    url: '/manage/Allocation/getInquiryAllocationUser',
    method: 'post',
    data,
  })
}

//获取询盘可分配用户
const getAllSuperMange = function (data) {
  return request({
    url: '/manage/Allocation/getAllSuperManage',
    method: 'post',
    data,
  })
}

//获取参与分配的用户组id
const getRoleAllocation = function (data) {
  return request({
    url: '/manage/Allocation/getRoleAllocation',
    method: 'post',
    data,
  })
}

//获取参与分配的用户
const getAllocationUser = function (data) {
  return request({
    url: '/manage/Allocation/getAllocationUser',
    method: 'post',
    data,
  })
}

//获取分类及参与分类分配的订单管理用户
const getOrderCateGory = function (data) {
  return request({
    url: '/manage/Allocation/getOrderCategory',
    method: 'post',
    data,
  })
}

//获取分类及参与分类分配的询盘管理用户
const getInquiryCategory = function (data) {
  return request({
    url: '/manage/Allocation/getInquiryManageUserAllocation',
    method: 'post',
    data,
  })
}

//获取溢出单接收管理员的ID
const getOverFlow = function (data) {
  return request({
    url: '/manage/Allocation/getOverFlow',
    method: 'post',
    data,
  })
}

//获取所有超管
const getAllManger = function (data) {
  return request({
    url: '/manage/Allocation/getAllManage',
    method: 'post',
    data,
  })
}

//设置管理员 设置溢出订单接收管理员的id
const setOverFlow = function (data) {
  return request({
    url: '/manage/Allocation/setOverFlow',
    method: 'post',
    data,
  })
}

//设置业务员用户组 设置参与分配的用户组
const setRoleAllocation = function (data) {
  return request({
    url: '/manage/Allocation/setRoleAllocation',
    method: 'post',
    data,
  })
}

//获取用户详情
const getUserCateGory = function (data) {
  return request({
    url: '/manage/Allocation/getManageUserAllocationSettings',
    method: 'post',
    data,
  })
}

//更新用户详情
const updateUserCateGory = function (data) {
  return request({
    url: '/manage/Allocation/updateManageUserAllocation',
    method: 'post',
    data,
  })
}

//更新排序
const updateSort = function (data) {
  return request({
    url: '/manage/Allocation/updateOrderSort',
    method: 'post',
    data,
  })
}

//添加用户到当前分类
const setUserCateGory = function (data) {
  return request({
    url: '/manage/Allocation/setManageUserAllocation',
    method: 'post',
    data,
  })
}

//从当前分类删除用户
const delUserCateGory = function (data) {
  return request({
    url: '/manage/Allocation/deleteManageUserAllocation',
    method: 'post',
    data,
  })
}

const customFetch = function (url,data) {
  return request({
    url: url,
    method: 'post',
    data,
  })
}

const allocationApi = {
  getInquiryUserCategory,
  updateInquiryCateGory,
  updateInquirySort,
  setInquiryUserCategory,
  deleteInquiryUserCategory,
  getInquiryAllocationUser,
  getAllSuperMange,
  getRoleAllocation,
  getAllocationUser,
  getOrderCateGory,
  getInquiryCategory,
  getOverFlow,
  getAllManger,
  setOverFlow,
  setRoleAllocation,
  getUserCateGory,
  updateUserCateGory,
  updateSort,
  setUserCateGory,
  delUserCateGory,
  customFetch
}

export default allocationApi

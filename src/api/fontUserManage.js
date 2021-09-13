import request from "@/utils/request";

//获取前台用户列表
const getFrontUserList = function(data) {
  return request({
    url: "/manage/user/getFrontUserList",
    method: "post",
    data
  });
};

//获取前台用户详情
const getFrontUserInfo = function(data) {
  return request({
    url: "/manage/user/getFrontUserInfo",
    method: "post",
    data
  });
};

//删除用户信息
const deleteFrontUser = function(data) {
  return request({
    url: "/manage/user/deleteFrontUser",
    method: "post",
    data
  });
};

//编辑用户信息
const editFrontUser = function(data) {
  return request({
    url: "/manage/user/editFrontUser",
    method: "post",
    data
  });
};

//编辑用户密码
const editFrontUserPassword = function(data) {
  return request({
    url: "/manage/user/editFrontUserPassword",
    method: "post",
    data
  });
};

//重置用户密码
const resetFrontUserPassword = function(data) {
  return request({
    url: "/manage/user/resetFrontUserPassword",
    method: "post",
    data
  });
};

//编辑用户地址
const editFrontUserAddress = function(data) {
  return request({
    url: "/manage/user/editFrontUserAddress",
    method: "post",
    data
  });
};

//获取地址列表
const getAddressById = function(data) {
  return request({
    url: "/manage/user/getAddressById",
    method: "post",
    data
  });
};

//删除地址信息
const deleteAddressById = function(data) {
  return request({
    url: "/manage/user/deleteAddressById",
    method: "post",
    data
  });
};

//获取国家省份
const getCountryAndState = function(data) {
  return request({
    url: "/manage/set/getCountryAndState",
    method: "post",
    data
  });
};

const fontUserManageApi = {
  getFrontUserList,
  getFrontUserInfo,
  deleteFrontUser,
  editFrontUser,
  editFrontUserPassword,
  resetFrontUserPassword,
  editFrontUserAddress,
  getAddressById,
  deleteAddressById,
  getCountryAndState
};

export default fontUserManageApi;

import request from '@/utils/request';

//获取所有管理员
const getAllSuperManger = function (data) {
    return request({
        url: '/manage/user/getAllSuperManager',
        method: 'post',
        data,
    })
}

//获取所有管理员
const getAllManager = function (data) {
    return request({
        url: '/manage/user/getAllManage',
        method: 'post',
        data,
    })
}

//根据id获取用户信息
const getManageUserInfoById = function (data) {
    return request({
        url: '/manage/user/getManageUserInfoById',
        method: 'post',
        data,
    })
}
//获取全部用户组
const getAllUserGroup = function () {
    return request({
        url: '/manage/user/getAllUserGroup',
        method: 'post',
    })
}
//获取用户组详情
const getUserGroup = function (data) {
    return request({
        url: '/manage/user/getUserGroup',
        method: 'post',
        data
    })
}
//添加或修改用户信息
const editUser = function (data) {
    return request({
        url: '/manage/user/editUser',
        method: 'post',
        data
    })
}
//添加或编辑用户组
const editUserGroup = function (data) {
    return request({
        url: '/manage/user/editUserGroup',
        method: 'post',
        data
    })
}
//新建用户
const addUser = function (data) {
    return request({
        url: '/manage/user/addUser',
        method: 'post',
        data
    })
}
//编辑后台用户信息(修改其他用户)
const editManageUser = function (data) {
    return request({
        url: '/manage/user/editManageUser',
        method: 'post',
        data
    })
}
//后台用户修改密码(其他后台用户)
const changeManagePassword = function (data) {
    return request({
        url: '/manage/user/changeManagePassword',
        method: 'post',
        data
    })
}
//删除用户组
const deleteUserGroup = function (data) {
    return request({
        url: '/manage/user/deleteUserGroup',
        method: 'post',
        data
    })
}
//删除后台用户
const deleteUser = function (data) {
    return request({
        url: '/manage/user/deleteUser',
        method: 'post',
        data
    })
}

//获取业务员列表
const getSalesManGroup = function(data) {
    return request({
        url: 'manage/user/getSalesManGroup',
        method: 'post',
        data
    })
}

const usersApi = {
    getAllManager,
    getAllSuperManger,
    getManageUserInfoById,
    getAllUserGroup,
    editUser,
    getUserGroup,
    editUserGroup,
    addUser,
    editManageUser,
    changeManagePassword,
    deleteUserGroup,
    deleteUser,
    getSalesManGroup
}

export default usersApi
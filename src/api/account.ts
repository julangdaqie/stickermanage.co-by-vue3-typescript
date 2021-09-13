import request from '@/utils/http';

//登录
const login = function (data:Object) {
    return request({
        url: '/manage/user/login',
        method: 'post',
        data
    })
}

//退出登录
const logOut = function (data:Object) {
    return request({
        url: '/manage/user/manageLogOut',
        method: 'post',
        data
    })
}

//获取所有管理员
const getUserInfo = function () {
    return request({
        url: '/manage/user/getUserInfo',
        method: 'post'
    })
}
//编辑后台用户信息(修改当前登录用户)
const editUser = function (data:Object) {
    return request({
        url: '/manage/user/editUser',
        method: 'post',
        data
    })
}
//后台用户修改密码(当前登录用户)
const changePassword = function (data:Object) {
    return request({
        url: '/manage/user/changePassword',
        method: 'post',
        data
    })
}

//判断用户是否登录 用来刷新redis缓存
const isLogin = function (data:Object) {
    return request({
        url: '/manage/user/isLogin',
        method: 'post',
        data
    })
}

const accountApi = {
    getUserInfo,
    editUser,
    changePassword,
    isLogin,
    login,
    logOut
}

export default accountApi
import request from '@/utils/request';

//获取所有自定义邮件订阅用户组
const getSubscriptionsUserGroups = function (data) {
    return request({
        url: '/manage/marketing/getSubscriptionsUserGroups',
        method: 'post',
        data,
    })
}
//获取产品分类列表
const getProductCateList = function (data) {
    return request({
        url: '/manage/product/getProductCateList',
        method: 'post',
        data,
    })
}
//获取产品分类列表
const sendSubscriptionEmail = function (data) {
    return request({
        url: '/manage/marketing/sendSubscriptionEmail',
        method: 'post',
        data,
    })
}
//添加或修改自定义邮件订阅用户组
const editSubscriptionsUserGroups = function (data) {
    return request({
        url: '/manage/marketing/editSubscriptionsUserGroups',
        method: 'post',
        data,
    })
}
//删除自定义邮件订阅用户组
const deleteSubscriptionsUserGroups = function (data) {
    return request({
        url: '/manage/marketing/deleteSubscriptionsUserGroups',
        method: 'post',
        data,
    })
}
//获取订阅用户（根据自定义用户组或者获取全部）
const getSubscriptionsUser = function (data) {
    return request({
        url: '/manage/marketing/getSubscriptionsUser',
        method: 'post',
        data,
    })
}
//设置自定义用户组成员
const setUserGroup = function (data) {
    return request({
        url: '/manage/marketing/setUserGroup',
        method: 'post',
        data,
    })
}
//获取所有订阅用户
const getAllSubscriptionsUser = function (data) {
    return request({
        url: '/manage/marketing/getAllSubscriptionsUser',
        method: 'post',
        data,
    })
}
const emailApi = {
    getSubscriptionsUserGroups,
    getProductCateList,
    sendSubscriptionEmail,
    editSubscriptionsUserGroups,
    deleteSubscriptionsUserGroups,
    getSubscriptionsUser,
    setUserGroup,
    getAllSubscriptionsUser
}

export default emailApi
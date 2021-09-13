import request from '@/utils/request';


//查询优惠规格列表
const getActivityCouponTypeList = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponTypeList',
        method: 'post',
        data,
    })
}

//批量删除优惠规格
const editActivityCouponType = function (data) {
    return request({
        url: 'manage/coupon/editActivityCouponType',
        method: 'post',
        data,
    })
}

//编辑优惠规格
const deleteActivityCouponType = function (data) {
    return request({
        url: 'manage/coupon/deleteActivityCouponType',
        method: 'post',
        data,
    })
}


//获取单个用户优惠券规格的所有适用产品分类
const getUserCouponConditionList = function (data) {
    return request({
        url: 'manage/coupon/getUserCouponConditionList',
        method: 'post',
        data,
    })
}


//编辑用户优惠券规格的适用产品分类
const editUserCouponCondition = function (data) {
    return request({
        url: 'manage/coupon/editUserCouponCondition',
        method: 'post',
        data,
    })
}


//删除用户优惠券规格的一个适用产品分类
const deleteUserCouponCondition = function (data) {
    return request({
        url: 'manage/coupon/deleteUserCouponCondition',
        method: 'post',
        data,
    })
}



//获取单个优惠规格
const getActivityCouponTypeById = function (data) {
    return request({
        url: 'manage/coupon/getActivityCouponTypeById',
        method: 'post',
        data,
    })
}

//获取所有优惠规格
const getAllActivityCouponType = function (data) {
    return request({
        url: 'manage/coupon/getAllActivityCouponType',
        method: 'post',
        data,
    })
}

//查询用户优惠券列表
const getUserCouponList = function (data) {
    return request({
        url: 'manage/coupon/getUserCouponList',
        method: 'post',
        data,
    })
}

//添加用户优惠券
const addUserCoupon = function (data) {
    return request({
        url: 'manage/coupon/addUserCoupon',
        method: 'post',
        data,
    })
}

//获取该用户优惠券规格下的未生成用户优惠券的用户列表
const getUserCouponTypeNoCreateCouponUser = function (data) {
    return request({
        url: 'manage/coupon/getUserCouponTypeNoCreateCouponUser',
        method: 'post',
        data,
    })
}


//批量删除用户优惠券
const deleteUserCoupon = function (data) {
    return request({
        url: 'manage/coupon/deleteUserCoupon',
        method: 'post',
        data,
    })
}

//批量删除用户优惠券
const sendUserCoupon = function (data) {
    return request({
        url: 'manage/coupon/sendUserCoupon',
        method: 'post',
        data,
    })
}

const userSpecificationsApi = {
    getActivityCouponTypeList,
    editActivityCouponType,
    getUserCouponConditionList,
    deleteActivityCouponType,
    editUserCouponCondition,
    deleteUserCouponCondition,
    getActivityCouponTypeById,
    getAllActivityCouponType,
    getUserCouponList,
    addUserCoupon,
    getUserCouponTypeNoCreateCouponUser,
    deleteUserCoupon,
    sendUserCoupon
}

export default userSpecificationsApi

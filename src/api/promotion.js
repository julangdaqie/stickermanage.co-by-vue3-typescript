import request from '@/utils/request';

//查询优惠券列表
const getCouponList = function(data) {
    return request({
        url: '/manage/coupon/getCouponList',
        method: 'post',
        data
    })
}

//查询会员
const getAllFrontUser = function(data) {
    return request({
        url: '/manage/user/getAllFrontUser',
        method: 'post',
        data
    })
}

//编辑优惠券
const editCoupon = function(data) {
    return request({
        url: '/manage/coupon/editCoupon',
        method: 'post',
        data
    })
}

//批量删除优惠券
const deleteCoupon = function(data) {
    return request({
        url: '/manage/coupon/deleteCoupon',
        method: 'post',
        data
    })
}

//查询活动优惠券列表
const getActivityCouponList = function(data) {
    return request({
        url: 'manage/coupon/getActivityCouponList',
        method: 'post',
        data
    })
}

//批量删除活动优惠券
const deleteActivityCoupon = function(data) {
    return request({
        url: '/manage/coupon/deleteActivityCoupon',
        method: 'post',
        data
    })
}

//获取所有活动优惠券类型(正常 未用完)(未开始)
const getAllActivityCouponType = function(data) {
    return request({
        url: 'manage/coupon/getAllActivityCouponType',
        method: 'post',
        data
    })
}

//添加活动优惠券
const editActivityCoupon = function(data) {
    return request({
        url: 'manage/coupon/editActivityCoupon',
        method: 'post',
        data
    })
}


//查询未读状态
const getOrderReadQuantity = function(data) {
    return request({
        url: 'manage/order/getOrderReadQuantity',
        method: 'post',
        data
    })
}
const promotionApi = {
    getCouponList,
    getAllFrontUser,
    editCoupon,
    deleteCoupon,
    getActivityCouponList,
    deleteActivityCoupon,
    getAllActivityCouponType,
    editActivityCoupon,
    getOrderReadQuantity
}

export default promotionApi
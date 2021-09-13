import request from '@/utils/request';


//查询活动优惠券类型列表
const getActivityCouponTypeList = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponTypeList',
        method: 'post',
        data,
    })
}
//查询活动优惠券类型
const editActivityCouponType = function (data) {
    return request({
        url: '/manage/coupon/editActivityCouponType',
        method: 'post',
        data,
    })
}

//获取单个活动优惠券类型
const getActivityCouponTypeById = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponTypeById',
        method: 'post',
        data,
    })
}

//批量删除优惠券类型
const deleteActivityCouponType = function (data) {
    return request({
        url: '/manage/coupon/deleteActivityCouponType',
        method: 'post',
        data,
    })
}

//获取活动优惠卷类型的产品分类限制条件
const getActivityCouponConditionList = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponConditionList',
        method: 'post',
        data,
    })
}

//编辑活动优惠卷类型的产品分类限制条件
const editActivityCouponCondition = function (data) {
    return request({
        url: '/manage/coupon/editActivityCouponCondition',
        method: 'post',
        data,
    })
}

//删除活动优惠券类型的产品分类限制条件
const deleteActivityCouponCondition = function (data) {
    return request({
        url: '/manage/coupon/deleteActivityCouponCondition',
        method: 'post',
        data,
    })
}

//查询活动优惠券列表
const getActivityCouponList = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponList',
        method: 'post',
        data,
    })
}

//添加活动优惠券
const editActivityCoupon = function (data) {
    return request({
        url: '/manage/coupon/editActivityCoupon',
        method: 'post',
        data,
    })
}

//批量删除活动优惠券
const deleteActivityCoupon = function (data) {
    return request({
        url: '/manage/coupon/deleteActivityCoupon',
        method: 'post',
        data,
    })
}

//根据产品分类id获取产品分类配置
const getProductParam = function (data) {
    return request({
        url: '/manage/product/getProductParam',
        method: 'post',
        data,
    })
}

//根据产品分类id获取产品分类配置
const getActivityCouponTypeBindUser = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponTypeBindUser',
        method: 'post',
        data,
    })
}

//根据产品分类id获取产品分类配置
const getActivityCouponConditionById = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponConditionById',
        method: 'post',
        data,
    })
}

//根据产品分类id获取产品分类配置
const getProductCateById = function (data) {
    return request({
        url: '/manage/product/getProductCateById',
        method: 'post',
        data,
    })
}

//批量添加活动优惠码
const batchAddActivityCoupon = function (data) {
    return request({
        url: '/manage/coupon/batchAddActivityCoupon',
        method: 'post',
        data,
    })
}
//获取绑定活动优惠券email或未绑定
const getActivityCouponBindUser = function (data) {
    return request({
        url: '/manage/coupon/getActivityCouponBindUser',
        method: 'post',
        data,
    })
}


//添加活动优惠码规格的一个适用产品分类的自定义参数
const editActivityCouponConditionParam = function (data) {
    return request({
        url: '/manage/coupon/editActivityCouponConditionParam',
        method: 'post',
        data,
    })
}


//获取活动优惠码规格的一个适用产品分类的自定义参数
const getAllActivityCouponConditionParam = function (data) {
    return request({
        url: '/manage/coupon/getAllActivityCouponConditionParam',
        method: 'post',
        data,
    })
}

//删除活动优惠码规格的一个适用产品分类的自定义参数
const deleteActivityCouponConditionParam = function (data) {
    return request({
        url: '/manage/coupon/deleteActivityCouponConditionParam',
        method: 'post',
        data,
    })
}

const getCouponName = function (data) {
    return request({
        url: '/manage/coupon/getCouponName',
        method: 'post',
        data,
    })
}

const getAllActivityCouponType = function (data) {
    return request({
        url: '/manage/coupon/getAllActivityCouponType',
        method: 'post',
        data,
    })
}
//查询活动优惠规格购买记录列表
const getCouponActivityBuyPeopleList = function (data) {
    return request({
        url: '/manage/coupon/getCouponActivityBuyPeopleList',
        method: 'post',
        data,
    })
}
//编辑活动优惠规格购买记录
const editCouponActivityBuyPeople = function (data) {
    return request({
        url: '/manage/coupon/editCouponActivityBuyPeople',
        method: 'post',
        data,
    })
}
//批量删除活动优惠规格购买记录
const deleteCouponActivityBuyPeople = function (data) {
    return request({
        url: '/manage/coupon/deleteCouponActivityBuyPeople',
        method: 'post',
        data,
    })
}
const couponApi = {
    getCouponActivityBuyPeopleList,
    editCouponActivityBuyPeople,
    deleteCouponActivityBuyPeople,
    getActivityCouponTypeList,
    editActivityCouponType,
    getActivityCouponTypeById,
    deleteActivityCouponType,
    getActivityCouponConditionList,
    editActivityCouponCondition,
    deleteActivityCouponCondition,
    getActivityCouponList,
    editActivityCoupon,
    deleteActivityCoupon,
    getProductParam,
    getActivityCouponTypeBindUser,
    getActivityCouponConditionById,
    getProductCateById,
    batchAddActivityCoupon,
    getActivityCouponBindUser,
    editActivityCouponConditionParam,
    getAllActivityCouponConditionParam,
    deleteActivityCouponConditionParam,
    getCouponName,
    getAllActivityCouponType
}

export default couponApi

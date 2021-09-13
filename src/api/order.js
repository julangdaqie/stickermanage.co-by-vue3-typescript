import request from '@/utils/request';

const getOrderList = function (data) {
    return request({
        url: '/manage/Order/getOrderList',
        method: 'post',
        data
    })
}

const getOrderInfo = function (data) {
    return request({
        url: '/manage/Order/getOrderInfo',
        method: 'post',
        data
    })
}

const editOrderShipping = function (data) {
    return request({
        url: '/manage/Order/editOrderShipping',
        method: 'post',
        data
    })
}

const editOrderPrice = function (data) {
    return request({
        url: 'manage/order/editOrderPrice',
        method: 'post',
        data
    })
}

const editOrderStatus = function (data) {
    return request({
        url: '/manage/Order/editOrderStatus',
        method: 'post',
        data
    })
}

const editOrderRemark = function (data) {
    return request({
        url: '/manage/Order/editOrderRemark',
        method: 'post',
        data
    })
}

const editOrderTrackingNumber = function (data) {
    return request({
        url: '/manage/Order/editOrderTrackingNumber',
        method: 'post',
        data
    })
}

//获取询盘列表
const getInquiryList = function (data) {
    return request({
        url: 'manage/inquiry/getInquiryList',
        method: 'post',
        data
    })
}

//扭转询盘状态
const editInquiry = function (data) {
    return request({
        url: 'manage/inquiry/editInquiry',
        method: 'post',
        data
    })
}

//获取询盘信息
const getInquiryInfo = function (data) {
    return request({
        url: 'manage/inquiry/getInquiryInfo',
        method: 'post',
        data
    })
}

//删除询盘
const delInquiry = function (data) {
    return request({
        url: 'manage/inquiry/delInquiry',
        method: 'post',
        data
    })
}

//超管修改业务员
const editInquirySalesMan = function (data) {
    return request({
        url: 'manage/inquiry/editInquirySalesMan',
        method: 'post',
        data
    })
}

//获取订单已读未读数量
const getOrderReadQuantity = function (data) {
    return request({
        url: 'manage/order/getOrderReadQuantity',
        method: 'post',
        data
    })
}


// 配送方式
const getDespatch = function (data) {
    return request({
        url: 'manage/Despatch/getDespatch',
        method: 'post',
        data
    })
}
const getInvoiceInfo = function (data) {
    return request({
        url: 'manage/invoice/getInvoiceInfo',
        method: 'post',
        data
    })
}

const getInvoiceBaseInfo = function (data) {
    return request({
        url: 'manage/invoice/getInvoiceBaseInfo',
        method: 'post',
        data
    })
}

const updateInvoice = function (data) {
    return request({
        url: 'manage/invoice/updateInvoice',
        method: 'post',
        data
    })
}

const addInvoice = function (data) {
    return request({
        url: 'manage/invoice/addInvoice',
        method: 'post',
        data
    })
}

const getInvoicePrintInfo = function (data) {
    return request({
        url: 'manage/invoice/getInvoicePrintInfo',
        method: 'post',
        data
    })
}
//转为免税
const editOrderDutyCertificate = function (data) {
    return request({
        url: 'manage/order/editOrderDutyCertificate',
        method: 'post',
        data
    })
}

const productionPrint= function (data) {
    return request({
        url: '/manage/Salesman/ProductionPrint',
        method: 'post',
        data
    })
}

//删除订单
const deleteByOrderId= function (data) {
    return request({
        url: '/manage/Order/deleteOrder',
        method: 'post',
        data
    })
}

//根据userId获取订单
const getOrderListByUserId = function (data) {
    return request({
        url: 'manage/Order/getOrderListByUserId',
        method: 'post',
        data
    })
}

//编辑订单详情之运费价格
const editOrderInfoShippingPrice = function (data) {
    return request({
        url: 'manage/Order/editOrderInfoShippingPrice',
        method: 'post',
        data
    })
}

//编辑订单详情之税费价格
const editOrderInfoTaxPrice = function (data) {
    return request({
        url: 'manage/Order/editOrderInfoTaxPrice',
        method: 'post',
        data
    })
}

//编辑订单详情之产品价格
const editOrderInfoProductPrice = function (data) {
    return request({
        url: 'manage/Order/editOrderInfoProductPrice',
        method: 'post',
        data
    })
}

//管理员用户备注
const addUserRemark = function (data) {
    return request({
        url: 'manage/user/addUserRemark',
        method: 'post',
        data
    })
}

//将用户设置为保密用户
const protectUser = function (data) {
    return request({
        url: 'manage/user/protectUser',
        method: 'post',
        data
    })
}
//编辑询盘备注状态
const editInquiryManageRemark = function(data) {
    return request({
        url: 'manage/inquiry/editInquiryManageRemark',
        method: 'post',
        data
    })
}

//编辑订单线下状态
const changeOfflineStatus = function(data) {
    return request({
        url: 'manage/order/changeOfflineStatus',
        method: 'post',
        data
    })
}

//删除订单
const deleteOrder = function(data) {
    return request({
        url: 'manage/order/deleteOrder',
        method: 'post',
        data
    })
}

//获取询盘老用户
const getInquiryListByEmail = function(data) {
    return request({
        url: 'manage/inquiry/getInquiryListByEmail',
        method: 'post',
        data
    })
}

//获取线下状态列表
const getInvoiceScheduleList = function(data) {
    return request({
        url: 'manage/order/getInvoiceScheduleList',
        method: 'post',
        data
    })
}


const orderApi = {
    getOrderList,
    getOrderInfo,
    editOrderShipping,
    editOrderPrice,
    editOrderStatus,
    editOrderRemark,
    editOrderTrackingNumber,
    getInquiryList,
    getInquiryInfo,
    editInquiry,
    delInquiry,
    editInquirySalesMan,
    getOrderReadQuantity,
    getDespatch,
    getInvoiceInfo,
    getInvoiceBaseInfo,
    updateInvoice,
    addInvoice,
    getInvoicePrintInfo,
    productionPrint,
    deleteByOrderId,
    getOrderListByUserId,
    editOrderInfoShippingPrice,
    editOrderInfoTaxPrice,
    editOrderInfoProductPrice,
    addUserRemark,
    protectUser,
    changeOfflineStatus,
    editInquiryManageRemark,
    deleteOrder,
    editOrderDutyCertificate,
    getInquiryListByEmail,
    getInvoiceScheduleList
}

export default orderApi
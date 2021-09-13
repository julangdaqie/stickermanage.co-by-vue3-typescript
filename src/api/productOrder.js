import request from '@/utils/request';

//采购单
const getPurchaseBaseInfo = function(data) {
    return request({
        url: 'manage/oaData/getPurchaseBaseInfo',
        method: 'post',
        data
    })
}

const addPurchase = function(data) {
    return request({
        url: 'manage/oaData/addPurchase',
        method: 'post',
        data
    })
}

const getPurchaseInfo = function(data) {
    return request({
        url: 'manage/oaData/getPurchaseInfo',
        method: 'post',
        data
    })
}

const updatePurchase = function(data) {
    return request({
        url: 'manage/oaData/updatePurchase',
        method: 'post',
        data
    })
}

//发货单
const getShippingBaseInfo = function(data) {
    return request({
        url: 'manage/oaShippingData/getShippingBaseInfo',
        method: 'post',
        data
    })
}

const addShipping = function(data) {
    return request({
        url: 'manage/oaShippingData/addShipping',
        method: 'post',
        data
    })
}

const getShippingInfo = function(data) {
    return request({
        url: 'manage/oaShippingData/getShippingInfo',
        method: 'post',
        data
    })
}

const updateShipping = function(data) {
    return request({
        url: 'manage/oaShippingData/updateShipping',
        method: 'post',
        data
    })
}

const getOaDataList = function(data) {
    return request({
        url: 'manage/oaData/getOaDataList',
        method: 'post',
        data
    })
}

const shippingForSingleOrder = function(data) {
    return request({
        url: 'manage/oaData/shippingForSingleOrder',
        method: 'post',
        data
    })
}

const deletePurchase = function(data) {
    return request({
        url: 'manage/oaData/deletePurchase',
        method: 'post',
        data
    })
}

const changeOaDataInfo = function(data) {
    return request({
        url: 'manage/oaData/changeOaDataInfo',
        method: 'post',
        data
    })
}

const getPurchasePrintInfo = function(data) {
    return request({
        url: 'manage/oaData/getPurchasePrintInfo',
        method: 'post',
        data
    })
}

const getShippingPrintInfo = function(data) {
    return request({
        url: 'manage/oaShippingData/getShippingPrintInfo',
        method: 'post',
        data
    })
}

const getProductionBaseInfo = function(data) {
    return request({
        url: 'manage/oaData/getProductionBaseInfo',
        method: 'post',
        data
    })
}

const addProduction = function(data) {
    return request({
        url: 'manage/oaData/addProduction',
        method: 'post',
        data
    })
}

const getProductionInfo = function(data) {
    return request({
        url: 'manage/oaData/getProductionInfo',
        method: 'post',
        data
    })
}

const updateProduction = function(data) {
    return request({
        url: 'manage/oaData/updateProduction',
        method: 'post',
        data
    })
}

const getProductionPrintInfo = function(data) {
    return request({
        url: 'manage/oaData/getProductionPrintInfo',
        method: 'post',
        data
    })
}

const deleteProduction = function(data) {
    return request({
        url: 'manage/oaData/deleteProduction',
        method: 'post',
        data
    })
}

//工厂问题订单
const getOaAbnormalOrderList = function(data) {
    return request({
        url: 'manage/OaAbnormalOrder/getOaAbnormalOrderList',
        method: 'post',
        data
    })
}

const editOaAbnormalOrder = function(data) {
    return request({
        url: 'manage/OaAbnormalOrder/editOaAbnormalOrder',
        method: 'post',
        data
    })
}


const getOaAbnormalOrderInfo = function(data) {
    return request({
        url: 'manage/OaAbnormalOrder/getOaAbnormalOrderInfo',
        method: 'post',
        data
    })
}

const deleteOaAbnormalOrder = function(data) {
    return request({
        url: 'manage/OaAbnormalOrder/deleteOaAbnormalOrder',
        method: 'post',
        data
    })
}

const getAbnormalOrderPrintInfo = function(data) {
    return request({
        url: 'manage/OaAbnormalOrder/getAbnormalOrderPrintInfo',
        method: 'post',
        data
    })
}

//美国生产单

const getProductionBaseInfoUsa = function(data) {
    return request({
        url: 'manage/oaData/getProductionBaseInfoUsa',
        method: 'post',
        data
    })
}

const addProductionUsa = function(data) {
    return request({
        url: 'manage/oaData/addProductionUsa',
        method: 'post',
        data
    })
}

const getOaDataListUsa = function(data) {
    return request({
        url: 'manage/oaData/getOaDataListUsa',
        method: 'post',
        data
    })
}

const getProductionPrintInfoUsa = function(data) {
    return request({
        url: 'manage/oaData/getProductionPrintInfoUsa',
        method: 'post',
        data
    })
}

const getProductionInfoUsa = function(data) {
    return request({
        url: 'manage/oaData/getProductionInfoUsa',
        method: 'post',
        data
    })
}

const updateProductionUsa = function(data) {
    return request({
        url: 'manage/oaData/updateProductionUsa',
        method: 'post',
        data
    })
}

const getShippingDialogInfoUsa = function(data) {
    return request({
        url: 'manage/oaData/getShippingDialogInfoUsa',
        method: 'post',
        data
    })
}

const confirmSalesmanRedo = function(data) {
    return request({
        url: 'manage/oaData/confirmSalesmanRedo',
        method: 'post',
        data
    })
}

const confirmSalesmanModify = function(data) {
    return request({
        url: 'manage/oaData/confirmSalesmanModify',
        method: 'post',
        data
    })
}

const confirmSalesmanDelete = function(data) {
    return request({
        url: 'manage/oaData/confirmSalesmanDelete',
        method: 'post',
        data
    })
}

const confirmSalesmanModifyShip = function(data) {
    return request({
        url: 'manage/OaShippingData/confirmSalesmanModify ',
        method: 'post',
        data
    })
}

const getOaDataCount = function() {
    return request({
        url: 'manage/oaData/getOaDataCount ',
        method: 'post',
    })
}

const getFinanceCount = function() {
    return request({
        url: 'manage/oaData/getFinanceCount ',
        method: 'post',
    })
}

const getFinanceSum = function() {
    return request({
        url: 'manage/oaData/getFinanceSum ',
        method: 'post',
    })
}

const productionConvertPurchase = function(data) {
    return request({
        url: 'manage/oaData/productionConvertPurchase',
        method: 'post',
        data
    })
}

const productOrderApi = {
    getPurchaseBaseInfo,
    addPurchase,
    getPurchaseInfo,
    updatePurchase,
    getShippingBaseInfo,
    addShipping,
    getShippingInfo,
    updateShipping,
    getOaDataList,
    shippingForSingleOrder,
    deletePurchase,
    changeOaDataInfo,
    getPurchasePrintInfo,
    getShippingPrintInfo,
    getProductionBaseInfo,
    addProduction,
    getProductionInfo,
    updateProduction,
    getProductionPrintInfo,
    deleteProduction,
    getOaAbnormalOrderList,
    editOaAbnormalOrder,
    getOaAbnormalOrderInfo,
    deleteOaAbnormalOrder,
    getProductionBaseInfoUsa,
    addProductionUsa,
    getOaDataListUsa,
    getProductionPrintInfoUsa,
    getProductionInfoUsa,
    updateProductionUsa,
    getShippingDialogInfoUsa,
    confirmSalesmanRedo,
    confirmSalesmanModify,
    confirmSalesmanDelete,
    confirmSalesmanModifyShip,
    getOaDataCount,
    getFinanceCount,
    getFinanceSum,
    getAbnormalOrderPrintInfo,
    productionConvertPurchase
}

export default productOrderApi


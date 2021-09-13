import request from '@/utils/request';

//订单量统计
const getOrderNumStatistics = function(data) {
    return request({
        url: '/common/DataAnalysis/getOrderNumStatistics',
        method: 'post',
        data
    })
}

//订单销量统计
const getOrderPriceStatistics = function(data) {
    return request({
        url: '/common/DataAnalysis/getOrderPriceStatistics',
        method: 'post',
        data
    })
}

//产品销量
const getProductSaleStatistics = function(data) {
    return request({
        url: '/common/DataAnalysis/getProductSaleStatistics',
        method: 'post',
        data
    })
}

//访问量统计
const getWebVisitStatistics = function(data) {
    return request({
        url: '/common/DataAnalysis/getWebVisitStatistics',
        method: 'post',
        data
    })
}

//客户地区统计
const cuntUserArea = function(data) {
    return request({
        url: '/common/DataAnalysis/cuntUserArea',
        method: 'post',
        data
    })
}

//活动订单统计
const getActivityOrderStatistics = function(data) {
    return request({
        url: '/common/DataAnalysis/getActivityOrderStatistics',
        method: 'post',
        data
    })
}


const statisticsApi = {
    getWebVisitStatistics,
    getOrderNumStatistics,
    getOrderPriceStatistics,
    getProductSaleStatistics,
    cuntUserArea,
    getActivityOrderStatistics
}

export default statisticsApi


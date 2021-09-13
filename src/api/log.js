import request from "@/utils/request";

// 获取订单日志
const getOrderLog = function (data) {
    return request({
        url: "/manage/log/getOrderLog",
        method: "post",
        data
    });
};

//删除订单日志
const deleteOrderLog = function (data) {
    return request({
        url: "/manage/log/deleteOrderLog",
        method: "post",
        data
    });
};

// 获取操作日志
const getManageOperationLog = function (data) {
    return request({
        url: "/manage/log/getManageOperationLog",
        method: "post",
        data
    });
};

// 删除操作日志
const deleteManageOperationLog = function (data) {
    return request({
        url: "/manage/log/deleteManageOperationLog",
        method: "post",
        data
    });
};

// 获取支付日志
const getPaymentLog = function (data) {
    return request({
        url: "/manage/log/getPaymentLog",
        method: "post",
        data
    })
}

//删除支付日志
const deletePaymentLog = function (data) {
    return request({
        url: "/manage/log/deletePaymentLog",
        method: "post",
        data
    })
}

const logApi = {
    getOrderLog,
    deleteOrderLog,
    getManageOperationLog,
    deleteManageOperationLog,
    getPaymentLog,
    deletePaymentLog,

};

export default logApi;

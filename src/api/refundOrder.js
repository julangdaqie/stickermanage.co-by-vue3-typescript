import request from "@/utils/request";

const getOrderCreditMemoList = function (data) {
  return request({
    url: "manage/OrderCreditMemo/getOrderCreditMemoList",
    method: "post",
    data
  });
};

const getTkStatus = function (data) {
  return request({
    url: "manage/OrderCreditMemo/getTkStatus",
    method: "post",
    data
  });
};

const editOrderCreditMemo = function (data) {
  return request({
    url: "manage/OrderCreditMemo/editOrderCreditMemo",
    method: "post",
    data
  });
};

const changeTkStatus = function (data) {
  return request({
    url: "manage/OrderCreditMemo/changeTkStatus",
    method: "post",
    data
  });
};

const delOrderCreditMemo = function (data) {
  return request({
    url: "manage/OrderCreditMemo/delOrderCreditMemo",
    method: "post",
    data
  });
};

const getSalesManGroup = function (data) {
  return request({
    url: "manage/user/getSalesManGroup",
    method: "post",
    data
  });
};

const printRefundForm = function (data) {
  return request({
    url: "manage/OrderCreditMemo/printRefundForm",
    method: "post",
    data
  });
};

const getQuantityUnderReview = function (data) {
  return request({
    url: "manage/OrderCreditMemo/getQuantityUnderReview",
    method: "post",
    data
  });
};
const refundOrderApi = {
  getOrderCreditMemoList,
  getTkStatus,
  editOrderCreditMemo,
  changeTkStatus,
  delOrderCreditMemo,
  getSalesManGroup,
  printRefundForm,
  getQuantityUnderReview

};


export default refundOrderApi;

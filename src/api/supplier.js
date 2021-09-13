import request from '@/utils/request';

const getSupplierList = function() {
  return request({
    url: '/manage/supplier/getSupplierList',
    method: 'post',
  })
}

const editSupplier = function(data) {
    return request({
        url: '/manage/supplier/editSupplier',
        method: 'post',
        data
    })
}

const getSupplierProductsById = function(data) {
    return request({
        url: '/manage/supplier/getSupplierProductsById',
        method: 'post',
        data
    })
}

const getSupplierProductsBySupplierId = function(data) {
    return request({
        url: '/manage/supplier/getSupplierProductsBySupplierId',
        method: 'post',
        data
    })
}

const editSupplierProduct = function(data) {
    return request({
        url: '/manage/supplier/editSupplierProduct',
        method: 'post',
        data
    })
}

const getSupplierListAndChildren = function() {
    return request({
        url: '/manage/supplier/getSupplierListAndChildren',
        method: 'post',
    })
}



const supplierApi = {
    getSupplierList,
    editSupplier,
    getSupplierProductsById,
    getSupplierProductsBySupplierId,
    editSupplierProduct,
    getSupplierListAndChildren
}

export default supplierApi


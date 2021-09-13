import request from '@/utils/request';

const getPageInfoById = function(data) {
    return request({
        url: '/manage/page/getPageInfoById',
        method: 'post',
        data
    })
}

const editPage = function(data) {
    return request({
        url: '/manage/page/editPage',
        method: 'post',
        data
    })
}

const getRowList = function(data) {
    return request({
        url: '/manage/page/getRowList',
        method: 'post',
        data
    })
}

const getPageList = function() {
    return request({
        url: '/manage/page/getPageList',
        method: 'post',
    })
}

const editPageRow = function(data) {
    return request({
        url: '/manage/page/editPageRow',
        method: 'post',
        data
    })
}

const getPageRowInfo = function(data) {
    return request({
        url: '/manage/page/getPageRowInfo',
        method: 'post',
        data
    })
}

const deletePageRow = function(data) {
    return request({
        url: '/manage/page/deletePageRow',
        method: 'post',
        data
    })
}
  
const pageApi = {
    getPageInfoById,
    editPage,
    getRowList,
    getPageList,
    editPageRow,
    getPageRowInfo,
    deletePageRow
}

export default pageApi
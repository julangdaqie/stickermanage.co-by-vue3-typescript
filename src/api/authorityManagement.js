import request from '@/utils/request';

//添加修改权限
const editJurisdiction = function(data){
    return request({
        url: '/manage/user/editJurisdiction',
        method: 'post',
        data
    })
}
//获取权限列表
const getJurisdiction = function(){
    return request({
        url: '/manage/user/getJurisdiction',
        method: 'post',
    })
}
//删除权限
const deleteJurisdiction = function(data){
    return request({
        url: '/manage/user/deleteJurisdiction',
        method: 'post',
        data
    })
}
const authorityManagementApi = {
    editJurisdiction,
    getJurisdiction,
    deleteJurisdiction
}
export default authorityManagementApi
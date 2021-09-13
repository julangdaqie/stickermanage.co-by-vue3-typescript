import request from '@/utils/request';

//获取所有自定义邮件订阅用户组
const getOaDataListForFinance = function (data) {
    return request({
        url: '/manage/oaData/getOaDataListForFinance',
        method: 'post',
        data,
    })
}
const financeApi = {
    getOaDataListForFinance
}

export default financeApi
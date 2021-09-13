import request from '@/utils/request';

//获取采购商集合
const getSupplierList = function (data) {
  return request({
    url: '/manage/Suppler/get_SupplierList',
    method: 'post',
    data,
  })
}

//添加更新供货商
const editSupplier = function (data) {
  return request({
    url: '/manage/suppler/edit_Supplier',
    method: 'post',
    data,
  })
}

//删除采购商
const delSupplier = function (data) {
  return request({
    url: '/manage/suppler/del_Supplier',
    method: 'post',
    data,
  })
}

const supperApi = {
  getSupplierList,
  editSupplier,
  delSupplier
}

export default supperApi
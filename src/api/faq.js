import request from '@/utils/request';

//获取faq类别集合
const getFaqCateList = function (data) {
  return request({
    url: '/manage/faq/getFaqCateList',
    method: 'post',
    data,
  })
}

//获取faq列表
const getFaqListByPage = function (data) {
  return request({
    url: '/manage/faq/getFaqListByPage',
    method: 'post',
    data
  })
}

//根据id删除faq
const deleteFaqById= function (data) {
  return request({
    url: '/manage/faq/deleteFaqById',
    method: 'post',
    data
  })
}

//根据id删除faq类别
const deleteFaqCateById= function (data) {
  return request({
    url: '/manage/faq/deleteFaqCateById',
    method: 'post',
    data
  })
}

//编辑faq
const editFaq= function (data) {
  return request({
    url: '/manage/faq/editFaq',
    method: 'post',
    data
  })
}

//编辑faq类别
const editFaqCate= function (data) {
  return request({
    url: '/manage/faq/editFaqCate',
    method: 'post',
    data
  })
}

//更新faq排序
const updateFaqSort= function (data) {
  return request({
    url: '/manage/faq/updateFaqSort',
    method: 'post',
    data
  })
}

const faqApi = {
  getFaqCateList,
  getFaqListByPage,
  deleteFaqById,
  deleteFaqCateById,
  editFaq,
  editFaqCate,
  updateFaqSort
}

export default faqApi
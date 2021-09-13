import request from '@/utils/request';

//删除标签分类
const deleteTagCategory = function (data) {
  return request({
    url: '/manage/tag/deleteTagCategory',
    method: 'post',
    data,
  })
}

//更新或添加标签
const editTag = function (data) {
  return request({
    url: '/manage/tag/editTag',
    method: 'post',
    data,
  })
}

//批量删除标签
const deleteTag = function (data) {
  return request({
    url: '/manage/tag/deleteTag',
    method: 'post',
    data,
  })
}

//
const editTagCategory = function (data) {
  return request({
    url: '/manage/tag/editTagCategory',
    method: 'post',
    data,
  })
}

const labelApi = {
  deleteTagCategory,
  editTag,
  deleteTag,
  editTagCategory
}

export default labelApi
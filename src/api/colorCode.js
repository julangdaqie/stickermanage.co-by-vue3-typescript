import request from '@/utils/request';

//上传颜色文件
const uploadColorData = function (data) {
  return request({
    url: '/manage/set/setColor',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}

//获取颜色列表
const getColor = function (data) {
  return request({
    url: '/manage/set/getColor',
    method: 'post',
    data
  })
}

const colorApi = {
  uploadColorData,
  getColor
}

export default colorApi
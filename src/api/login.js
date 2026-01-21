import request from '@/utils/request'

//登录
export const loginApi = (data) => request({
  url: '/login',
  method: 'post',
  data
})
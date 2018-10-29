import request from '@/utils/request'
import qs from 'qs'

export function Login({ username, password, platform }) {
  const data = {
    username,
    password,
    platform
  }

  return request({
    url: '/honghe/v1/account/admin/login',
    method: 'post',
    data: qs.stringify(data)
  })
}

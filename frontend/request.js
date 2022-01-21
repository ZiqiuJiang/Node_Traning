import {Service} from './Service'

export function Login(username,password) {
  return Service({
    url: '/user/login',
    method: 'get',
    params: { username,password }
  })
}
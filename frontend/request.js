import {Service} from './Service'

export function Login(username,password) {
  return Service({
    url: '/user/login',
    method: 'get',
    params: { username,password }
  })
}

export function getAllActicle() {
  return Service({
    url: '/article/get',
    method: 'get',
    params: {}
  })
}


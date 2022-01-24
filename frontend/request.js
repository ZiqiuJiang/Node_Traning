import { Service } from './Service'

export function Login(username, password) {
  return Service({
    url: '/user/login',
    method: 'get',
    params: { username, password }
  })
}

export function getAllActicle() {
  return Service({
    url: '/article/get',
    method: 'get',
    params: {}
  })
}

export function getComment(articleid) {
  return Service({
    url: '/Comment/get',
    method: 'get',
    params: { articleid }
  })
}

export function postArticle(userid,title,content) {
  return Service({
    url: '/article/post',
    method: 'post',
    params: { userid,title,content }
  })
}


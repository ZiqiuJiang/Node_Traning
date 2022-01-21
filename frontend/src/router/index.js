import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import showArticle from '@/components/showArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/showArticle',
      name: 'showArticle',
      component: showArticle
    }
  ]
})

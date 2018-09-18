import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/view/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/userManager',
      name: 'userManager',
      meta: {
        title: '用户管理'
      },
      component: () => import('@/pages/userManager/userManager.vue')
    }
  ]
})

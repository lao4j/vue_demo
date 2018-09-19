import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/userManager',
          name: 'userManager',
          meta: {
            title: '用户管理'
          },
          component: () => import('@/pages/userManager/userManager.vue')
        }
      ]
    }
  ]
})

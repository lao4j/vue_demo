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
          path: '/userManager/listPage',
          name: 'listPage',
          meta: {
            title: '列表页面'
          },
          component: () => import('@/pages/userManager/listPage')
        },
        {
          path: '/userManager/addPage',
          name: 'addPage',
          meta: {
            title: '新增列表'
          },
          component: () => import('@/pages/userManager/addPage')
        }
      ]
    }
  ]
})

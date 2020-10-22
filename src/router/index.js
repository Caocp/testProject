import Vue from 'vue'
import VueRouter from 'vue-router'
import { TabbarLayout } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: TabbarLayout,
    meta: { title: '首页' },
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/Home'),
      meta: { title: '首页' }
    },
    {
      path: '/service',
      name: 'Service',
      component: () => import('@/views/service/Service'),
      meta: { title: '服务' }
    }, {
      path: 'activity',
      name: 'Activity',
      component: () => import('@/views/activity/Activity'),
      meta: { title: '活动' }
    }, {
      path: 'me',
      name: 'Me',
      component: () => import('@/views/me/Me'),
      meta: { title: '我的' }
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login'),
    meta: { title: '登录' }
  },
  {
    path: '/ParkSelection',
    name: 'ParkSelection',
    component: () => import('@/views/home/ParkSelection'),
    meta: { title: '园区选择' }
  },
  {
    path: '/ActivityDetail',
    name: 'ActivityDetail',
    component: () => import('@/views/activity/ActivityDetail'),
    meta: { title: '活动详情' }
  },
  {
    path: '/NotificeManagement',
    name: 'NotificeManagement',
    component: () => import('@/views/me/NotificeManagement'),
    meta: { title: '通知管理' }
  },
  {
    path: '/noticeNews',
    name: 'noticeNews',
    component: () => import('@/views/home/noticeNews'),
    meta: { title: '头条' }
  },
  {
    path: '/personInfor',
    name: 'personInfor',
    component: () => import('@/views/me/personInfor'),
    meta: { title: '我的资料' }
  },
  {
    path: '/gym',
    name: 'gym',
    component: () => import('@/views/service/gym'),
    meta: { title: '健身中心' }
  }
]

const router = new VueRouter({
  routes
})

export default router

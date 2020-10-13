import router from './router'
import store from './store'
import storage from 'store'
import { setDocumentTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { Toast } from 'vant'

const whiteList = ['Login', 'Home', 'Activity', 'Service', 'ParkSelection']
const loginRoutePath = '/login'
const defaultRoutePath = '/home'

router.beforeEach((to, from, next) => {
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(to.meta.title))
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
    } else {
      if (store.getters.userInfo == null) {
        store.dispatch('GetInfo').then(res => {
          const redirect = decodeURIComponent(from.query.redirect || to.path)
          if (to.path === redirect) {
            next({ ...to, replace: true })
          } else {
            next({ path: redirect })
          }
        }).catch(() => {
          Toast.fail('请求用户信息失败，请重试')
          store.dispatch('Logout').then(() => {
            next({ path: loginRoutePath, query: { redirect: to.fullPath } })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
    }
  }
})

router.afterEach(() => {
})

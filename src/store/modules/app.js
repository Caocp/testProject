import storage from 'store'
import { ACTIVE_TABBAR, PARK_STORE } from '@/store/mutation-types'

const app = {
  state: {
    activeTabbar: ''
  },
  mutations: {
    SET_ACTIVE_TABBAR: (state, name) => {
      state.activeTabbar = name
      storage.set(ACTIVE_TABBAR, name)
    },
    SET_PARK_STORE: (state, name) => {
      state.activeTabbar = name
      storage.set(PARK_STORE, name)
    }
  }
}

export default app

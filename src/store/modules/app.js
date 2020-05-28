import storage from 'store'
import { ACTIVE_TABBAR } from '@/store/mutation-types'

const app = {
  state: {
    activeTabbar: ''
  },
  mutations: {
    SET_ACTIVE_TABBAR: (state, name) => {
      state.activeTabbar = name
      storage.set(ACTIVE_TABBAR, name)
    }
  }
}

export default app

import storage from 'store'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const user = {
  state: {
    token: '',
    info: null
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response.data
          storage.set(ACCESS_TOKEN, result.token, 60 * 60 * 1000)
          commit('SET_TOKEN', result.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          const result = res.data
          commit('SET_INFO', result)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(res => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          commit('SET_INFO', null)
          commit('SET_TOKEN', '')
          storage.remove(ACCESS_TOKEN)
        })
      })
    }
  }
}

export default user

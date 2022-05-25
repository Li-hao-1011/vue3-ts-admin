import { createStore } from 'vuex'

import { IRootState } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lhhhhh'
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    login
  }
})

export default store

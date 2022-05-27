import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

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
  modules: { login }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export function userStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store

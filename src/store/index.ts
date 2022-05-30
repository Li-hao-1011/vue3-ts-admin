import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lhhhhh'
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: { login, system }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export function userStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store

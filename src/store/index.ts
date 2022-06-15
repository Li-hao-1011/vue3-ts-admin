import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState } from './types'
import type { IStore } from './types'
import { getPageList } from '@/service/main/system/system'

import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analys/dashboard'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lhhhhh',
      entireRoles: [],
      entireDepartments: [],
      entireMenus: [],
      isCollapse: false
    }
  },
  getters: {},
  actions: {
    async getInitalDataAction({ commit }) {
      const rolesResult = await getPageList('/role/list', { offset: 0, size: 100 })
      const departmentsResult = await getPageList('/department/list', {
        offset: 0,
        size: 100
      })
      const menusResult = await getPageList('/menu/list', {})
      const { list: entireRoles } = rolesResult.data
      const { list: entireDepartments } = departmentsResult.data
      const { list: entireMenus } = menusResult.data

      commit('changeEntireRoles', entireRoles)
      commit('changeEntireDepartments', entireDepartments)
      commit('changeEntireMenus', entireMenus)
    }
  },
  mutations: {
    changeEntireRoles(state, entireRoles) {
      state.entireRoles = entireRoles
    },
    changeEntireDepartments(state, entireDepartments) {
      state.entireDepartments = entireDepartments
    },
    changeEntireMenus(state, entireMenus) {
      state.entireMenus = entireMenus
    },

    changeCollapse(state, isCollapse: boolean) {
      state.isCollapse = isCollapse
    }
  },
  modules: { login, system, dashboard }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitalDataAction')
}

export function useStore(): Store<IStore> {
  return useVuexStore()
}
export default store

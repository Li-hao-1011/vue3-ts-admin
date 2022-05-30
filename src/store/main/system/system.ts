import { Module } from 'vuex'

import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageListData } from '@/service/mian/user'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    setUserListMutations(state, payload: any[]) {
      state.userList = payload
    },
    setUserCountMutations(state, payload: number) {
      state.userCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 发起请求
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      commit('setUserListMutations', list)
      commit('setUserCountMutations', totalCount)
    }
  },
  getters: {}
}

export default systemModule

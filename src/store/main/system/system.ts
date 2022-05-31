import { Module } from 'vuex'

import { IRootState } from '@/store/types'
import { ISystemState, IPagePayload } from './types'
import { getPageListData } from '@/service/mian/user'
import { getPageList } from '@/service/mian/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    setUsersListMutations(state, payload: any[]) {
      state.usersList = payload
    },
    setUsersCountMutations(state, payload: number) {
      state.usersCount = payload
    },

    setRoleListMutations(state, payload: any[]) {
      state.roleList = payload
    },
    setRoleCountMutations(state, payload: number) {
      state.roleCount = payload
    }
  },
  actions: {
    async getPageListDataAction({ commit }, payload: IPagePayload) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      if (pageUrl.length === 0) {
        return
      }
      const { totalCount, list } = await getPageList(pageUrl, payload.queryInfo)

      switch (pageName) {
        case 'users':
          commit('setUsersCountMutations', totalCount)
          commit('setUsersListMutations', list)
          break
        case 'role':
          commit('setRoleCountMutations', totalCount)
          commit('setRoleListMutations', list)
          break
      }
    },
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      // 获取 url
      /*       let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      } */

      const changePageName = pageName.slice(0, 1).toLocaleUpperCase() + pageName.slice(1)

      // 发起请求
      const pageResult = await getPageListData(`/${pageName}/list`, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit(`set${changePageName}ListMutations`, list)
      commit(`set${changePageName}CountMutations`, totalCount)

      /*       switch (pageName) {
        case 'users':
          commit('setUsersListMutations', list)
          commit('setUsersCountMutations', totalCount)
          break
        case 'role':
          commit('setRoleListMutations', list)
          commit('setRoleCountMutations', totalCount)
          break
      } */
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        /*         switch (pageName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
        } */
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]

        /*       switch (pageName) {
          case 'users':
            return state.userCount
          case 'role':
            return state.roleCount
        } */
      }
    }
  }
}

export default systemModule

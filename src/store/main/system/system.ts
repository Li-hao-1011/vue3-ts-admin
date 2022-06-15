import { Module } from 'vuex'

import { IRootState } from '@/store/types'
import { ISystemState, IPagePayload } from './types'
import { getPageListData } from '@/service/main/user'
import {
  getPageList,
  deletePageDataById,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,

      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },

    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  actions: {
    async getPageListDataAction({ commit }, payload: any) {
      // 获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      const pageResult = await getPageList(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      switch (pageName) {
        case 'users':
          commit('setUsersListMutations', list)
          commit('setUsersCountMutations', totalCount)
          break
        case 'role':
          commit('setRoleListMutations', list)
          commit('setRoleCountMutations', totalCount)
          break

        case 'goods':
          commit('changeGoodsList', list)
          commit('changeGoodsCount', totalCount)
          break
        case 'menu':
          commit('changeMenuList', list)
          commit('changeMenuCount', totalCount)
          break
      }
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      // 拼接url
      // pageName id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 删除
      await deletePageDataById(pageUrl)
      // 重新获取数据
      dispatch('getPageListDataAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      dispatch('getPageListDataAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      dispatch('getPageListDataAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}

export default systemModule

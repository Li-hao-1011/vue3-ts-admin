import { Module } from 'vuex'

import { IRootState } from '@/store/types'
import { ISystemState, IPagePayload } from './types'
import { getPageListData } from '@/service/mian/user'
import { getPageList, deletePageDataById } from '@/service/mian/system/system'

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

      /*   if (pageUrl.length === 0) {
        return
      } */
      const pageResult = await getPageList(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      // const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      // commit(`change${changePageName}List`, list)
      // commit(`change${changePageName}Count`, totalCount)

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
    /*     async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName

      const changePageName = pageName.slice(0, 1).toLocaleUpperCase() + pageName.slice(1)

      // 发起请求
      const pageResult = await getPageListData(`/${pageName}/list`, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      // 存储数据
      commit(`set${changePageName}ListMutations`, list)
      commit(`set${changePageName}CountMutations`, totalCount)
    }, */

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

import { Module } from 'vuex'
import { IRootState } from '@/store/types'

import { IDashboardState } from './types'

import {
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getCategoryGoodsCount
} from '@/service/main/analys/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  actions: {
    async getDashboardDataAction({ commit }, payload: any) {
      // 请求数据
      const addressGoodsSaleResult = await getAddressGoodsSale()
      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      const categoryGoodsCountResult = await getCategoryGoodsCount()

      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, data) {
      state.categoryGoodsCount = data
    },
    changeCategoryGoodsSale(state, data) {
      state.categoryGoodsSale = data
    },
    changeCategoryGoodsFavor(state, data) {
      state.categoryGoodsFavor = data
    },
    changeAddressGoodsSale(state, data) {
      state.addressGoodsSale = data
    }
  }
}

export default dashboardModule

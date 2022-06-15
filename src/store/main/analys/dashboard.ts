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

      commit('changeCategoryGoodsCount', categoryGoodsCountResult)
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult)
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult)
      commit('changeAddressGoodsSale', addressGoodsSaleResult)
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

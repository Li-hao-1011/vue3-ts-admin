import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'
import router from '@/router'

import localCatch from '@/utils/cache'

// Module<S, R> S：state的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return { token: '', userInfo: {}, userMenu: [] }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log(payload)

      // login
      const loginResult = await accountLoginRequest(payload)

      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCatch.setCache('token', token, 'localStorage')

      // 请求用户信息
      const { data: userInfo } = await requestUserInfoById(id)
      commit('changeUserInfo', userInfo)
      localCatch.setCache('userInfo', userInfo, 'localStorage')

      // 请求菜单
      const menus = await requestUserMenusById(userInfo.role.id)
      commit('changeUserMenus', menus.data)
      localCatch.setCache('userMenus', menus.data, 'localStorage')

      // 跳转到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload) {
      console.log('执行 phoneLoginAction', payload, commit)
    },

    loadLocalLogin({ commit }) {
      const token = localCatch.getCache('token', 'localStorage')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCatch.getCache('userInfo', 'localStorage')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMnenus = localCatch.getCache('userMenus', 'localStorage')
      if (userMnenus) {
        commit('changeUserMenus', userMnenus)
      }
    }
  },
  mutations: {
    changeToken(state, value: string) {
      state.token = value
    },
    changeUserInfo(state, value: object) {
      state.userInfo = JSON.parse(JSON.stringify(value))
    },
    changeUserMenus(state, value: object) {
      state.userMenu = JSON.parse(JSON.stringify(value))
    }
  }
}

export default loginModule

import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/types'

import { ILoginState } from './types'
import { IRootState } from '../types'

// Module<S, R> S：state的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return { token: '', userInfo: {} }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('执行 accountLoginAction', payload, commit)

      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('执行 phoneLoginAction', payload, commit)
    }
  },
  mutations: {}
}

export default loginModule

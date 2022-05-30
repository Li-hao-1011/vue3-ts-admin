import server from '../index'

import { IDataType } from '@/service/types'
import { IAccount, ILoginResult } from './types'
import { IUserInfo } from '@/store/login/types'

enum LoginURL {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return server.post<IDataType<ILoginResult>>({
    url: LoginURL.AccountLogin,
    data: account,
    showLoading: true
  })
}

export function requestUserInfoById(id: number) {
  return server.get<IDataType<IUserInfo>>({
    url: LoginURL.LoginUserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return server.get<IDataType>({
    url: LoginURL.UserMenus + id + '/menu'
  })
}

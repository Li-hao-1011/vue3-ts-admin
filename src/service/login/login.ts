import server from '../index'

import { IAccount, IDataType, ILoginResult } from './types'

enum LoginURL {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/menu/'
}

export function accountLoginRequest(account: IAccount) {
  return server.post<IDataType<ILoginResult>>({
    url: LoginURL.AccountLogin,
    data: account,
    showLoading: true
  })
}

export function requestUserInfoById(id: number) {
  return server.get<IDataType>({
    url: LoginURL.LoginUserInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return server.get<IDataType>({
    url: LoginURL.UserMenus + id
  })
}

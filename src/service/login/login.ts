import request from '../index'

import { IAccount } from './types'

enum LoginURL {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return request.post({
    url: LoginURL.AccountLogin,
    data: account
  })
}

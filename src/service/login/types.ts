export type IAccount = {
  account: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

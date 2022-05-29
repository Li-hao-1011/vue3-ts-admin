export interface ILoginState {
  token: string
  userInfo: any
  userMenu: Array<any>
}

export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: {
    id: number
    name: string
    createAt: string
    updataAt: string
    intro: string
  }
  department: {
    id: number
    name: string
    createAt: string
    updataAt: string
    leader: string
    parentId: string | number
  } | null
}

export interface IRootWidthModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWidthModule

import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analys/types'

// import { IAnalysis } from './main/analysis/types'

export interface IRootState {
  name: string
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
  isCollapse: boolean
}

export interface IRootAndLogin {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStore = IRootState & IRootAndLogin

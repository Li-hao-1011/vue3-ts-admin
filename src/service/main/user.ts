import server from '../index'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return server.post<IDataType>({
    url,
    data: queryInfo
  })
}

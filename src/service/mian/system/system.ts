import server from '@/service'

import { IDataType } from '../../types'

export function getPageList(pageUrl: string, queryInfo: any) {
  return server.post({
    url: pageUrl,
    data: queryInfo
  })
}

export function deletePageDataById(url: string) {
  return server.delete<IDataType>({
    url
  })
}

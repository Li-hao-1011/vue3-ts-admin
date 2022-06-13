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

export function createPageData(url: string, newData: any) {
  return server.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, newData: any) {
  return server.patch<IDataType>({
    url,
    data: newData
  })
}

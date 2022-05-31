import server from '@/service'

export function getPageList(pageUrl: string, queryInfo: any) {
  return server.post({
    url: pageUrl,
    data: queryInfo
  })
}

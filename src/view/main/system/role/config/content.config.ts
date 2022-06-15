import { IPropList } from './search.config'

interface contentTableConfig {
  title: string
  propList: IPropList[]
  showIndexColumn: boolean
  showSelectColumn: boolean
  handleSelectionChange: () => void
}

export const contentTableConfig: contentTableConfig = {
  title: '角色列表',

  propList: [
    { prop: 'name', label: '角色名', minWiath: '100', slotName: 'name' },
    { prop: 'intro', label: '角色介绍', minWiath: '100', slotName: 'intro' },
    { prop: 'createAt', label: '创建时间', minWiath: '200', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWiath: '200', slotName: 'updateAt' },
    { label: '操作', minWiath: '120', slotName: 'handler' }
  ],

  showIndexColumn: true,
  showSelectColumn: true,
  handleSelectionChange: () => {
    //
  }
}

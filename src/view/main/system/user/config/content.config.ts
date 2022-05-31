import { IPropList } from './search.config'

interface contentTableConfig {
  title: string
  propList: IPropList[]
  showIndexColumn: boolean
  showSelectColumn: boolean
  handleSelectionChange: () => void
}

export const contentTableConfig: contentTableConfig = {
  title: '用户列表',

  propList: [
    { prop: 'name', label: '用户名', minWiath: '100', slotName: 'name' },
    { prop: 'realname', label: '真实姓名', minWiath: '100', slotName: 'realname' },
    { prop: 'enable', label: '状态', minWiath: '100', slotName: 'enable' },
    { prop: 'cellphone', label: '手机号码', minWiath: '200', slotName: 'cellphone' },
    { prop: 'createAt', label: '创建时间', minWiath: '200', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWiath: '200', slotName: 'updateAt' },
    { label: '操作', minWiath: '120', slotName: 'handle' }
  ],

  showIndexColumn: true,
  showSelectColumn: true,
  handleSelectionChange: () => {
    //
  }
}

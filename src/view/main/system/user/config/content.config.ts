/*
  import { IPropList } from './search.config'

  interface contentTableConfig {
  title: string
  propList: IPropList[]
  showIndexColumn: boolean
  showSelectColumn: boolean
  handleSelectionChange: () => void
} */

export const contentTableConfig = {
  title: '用户列表',
  creatBtn: '新建用户',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '150' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],

  showIndexColumn: true,
  showSelectColumn: true
  /*  handleSelectionChange: () => {
    //
  } */
}

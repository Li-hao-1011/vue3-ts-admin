import { IForm } from '@/base-ui/LhFrom/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeHolder: '请输入用户名',
      rules: []
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名',
      rules: []
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeHolder: '请输入手机号码',
      rules: []
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeHolder: '请选择状态',
      rules: [],
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
}

export interface IPropList {
  prop?: string
  label?: string
  minWiath?: string
  slotName?: string
}

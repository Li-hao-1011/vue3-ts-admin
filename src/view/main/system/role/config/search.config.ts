import { IForm } from '@/base-ui/LhFrom/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeHolder: '请输入角色名称',
      rules: []
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeHolder: '请输入权限介绍',
      rules: []
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

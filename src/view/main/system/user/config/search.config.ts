import { IForm } from '@/base-ui/LhFrom/types'

export const formConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      filed: 'password',
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      filed: 'sport',
      type: 'select',
      label: '喜欢的运动',
      rules: [],
      options: [
        { title: '篮球', value: 1 },
        { title: '足球', value: 2 },
        { title: '羽毛球', value: 3 }
      ]
    },
    {
      filed: 'createDate',
      type: 'datepicker',
      label: '时间范围',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
  /*, colLayout: {
    span: 8
  }, */
  /*  , itemStyle: {
    padding: '10px 40px'
  } */
}

export interface IPropList {
  prop?: string
  label?: string
  minWiath?: string
  slotName?: string
}

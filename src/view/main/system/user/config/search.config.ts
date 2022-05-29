import { IForm } from '@/base-ui/LhFrom/types'

export const formConfig: IForm = {
  formItems: [
    { type: 'input', label: '用户名', rules: [], placeholder: '请输入用户名' },
    { type: 'password', label: '密码', rules: [], placeholder: '请输入密码' },
    {
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

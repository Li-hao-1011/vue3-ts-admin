type IFormType = 'input' | 'select' | 'password' | 'datepicker'
export interface IFormItem {
  filed: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: {
    startPlaceholder: string
    endPlaceholder: string
    type: string
  }
}

export interface IForm {
  formItems: IFormItem[]
  colLayout?: object
  itemStyle?: object
  labelWidth?: string
}

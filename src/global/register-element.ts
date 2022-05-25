/* 按需引用 */
import { App } from 'vue'
// import 'element-plus/theme-chalk/index.css'
// import 'element-plus/theme-chalk/base.css'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
]

export default (app: App): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}

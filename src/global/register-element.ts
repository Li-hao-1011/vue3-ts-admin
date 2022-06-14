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
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElDropdownMenu,
  ElDropdown,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElTable,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree
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
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElTable,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree
]

export default (app: App): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}

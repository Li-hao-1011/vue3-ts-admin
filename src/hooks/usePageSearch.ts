import { ref } from 'vue'
import PageConetnt from '@/components/page-content'

export const usePageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageConetnt>>()

  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}

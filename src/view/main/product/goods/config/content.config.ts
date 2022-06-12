export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价格', minWidth: '50', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '50' },
    { prop: 'imgUrl', label: '商品图片展示', minWidth: '60', slotName: 'imgUrl' },
    { prop: 'status', label: '商品状态', minWidth: '50' },

    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '100', slotName: 'handler' }
  ],

  showIndexColumn: true,
  showSelectColumn: true
  /*  handleSelectionChange: () => {
    //
  } */
}

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置方式一：vueCLI的属性
  outputDir: 'build',
  // 配置方式二：与webpack属性完全一致，最后会进行合并
  /*  configureWebpack: {
    resolve: {
      alias: {
        components: '@/commponent'
      }
    }
  }, */
  // configureWebpack 使用函数
  /*   configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }, */
  // 配置方式三：链式方式
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('components', '@/components')
  }
})

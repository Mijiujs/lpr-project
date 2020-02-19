const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/', // 部署应用包的子路径
  outputDir: 'dist', // npm run build生成的生产环境构建目录的文件
  assetsDir: '', // js,css静态资源被放置的目录 (相对于 outputDir)
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  lintOnSave: false, // 开发环境eslint保存时检验
  runtimeCompiler: false, // 运行时加编译器，不加体积更小vue推荐
  // pwa: {
  //   iconPaths: {
  //     favicon32: 'favicon.ico',
  //     favicon16: 'favicon.ico',
  //     appleTouchIcon: 'favicon.ico',
  //     maskIcon: 'favicon.ico',
  //     msTileImage: 'favicon.ico'
  //   }
  // },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
      axios: 'axios',
      qs: 'Qs'
    },
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css)(\?.*)?$/i, // 需要压缩的文件正则
        threshold: 10240, // 文件大小大于这个值时启用压缩
        deleteOriginalAssets: false// 压缩后保留原文件
      })
    ]
  },
  devServer: {
    port: 8080
  }
}

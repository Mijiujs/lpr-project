module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 部署应用包的子路径
  outputDir: 'dist', // npm run build生成的生产环境构建目录的文件
  assetsDir: '', // js,css,img,font静态资源被放置的目录 (相对于 outputDir)
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  lintOnSave: false, // 开发环境eslint保存时检验
  runtimeCompiler: false, // 运行时加编译器，不加体积更小vue推荐
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
      axios: 'axios',
      qs: 'Qs',
      echarts: 'echarts'
    },
  },
  devServer: {

    port: 8080
  },
}

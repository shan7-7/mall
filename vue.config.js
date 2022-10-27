module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        // 内部已经配置src
        // '@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // router和store不需要，可直接用$router/$store获得
      }
    }
  },
  // devServer: {
  //   overlay: {
  //     warnings: false, //不显示警告
  //     errors: false	//不显示错误
  //   }
  // },
  lintOnSave: false //关闭eslint检查
}

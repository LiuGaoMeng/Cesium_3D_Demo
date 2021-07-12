const path = require('path')

//const BASE_URL = process.env.NODE_ENV === 'production' ? '/my-project/' : '/'
const BASE_URL = process.env.NODE_ENV === 'production' ?  './' :'/'
const resolve = dir => path.join(__dirname,dir)

module.exports = {
  lintOnSave: false,
  baseUrl:BASE_URL,

  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/components'))
  },
  productionSourceMap:false,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       /* 目标代理服务器地址 */
  //       target: 'http://localhost:8080',
  //       /* 允许跨域 */
  //       changeOrigin: true,
  //     }
  //   }
  // }
}

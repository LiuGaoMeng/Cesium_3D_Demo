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
    // before: require('./src/mock/index')
   // proxy: {
      // '/tdtlayer': {
      //   target:"http://t0.tianditu.com/img_c",
      //   // target:"http://localhost:8080",
      //   secure: false, // 如果是https接口，需要配置这个参数
      //   changeOrigin: true, //是否跨域
      //   pathRewrite: {'^/tdtlayer': ''} //需要rewrite的
      // },
      // '/': {
      //   // target:"http://192.168.31.60:8093",
      //   target:"http://localhost:8080",
      //   secure: false, // 如果是https接口，需要配置这个参数
      //   changeOrigin: true, //是否跨域
      //   pathRewrite: {'^/': ' '} //需要rewrite的
      // }
   // }
    // proxy: process.env.NODE_ENV === 'production' ? 'http://192.168.31.60:28891' : 'http://192.168.31.60:28891'
  // },
}

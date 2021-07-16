/*
 * @Author: your name
 * @Date: 2021-03-08 15:15:11
 * @LastEditTime: 2021-03-09 11:11:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \map-demo\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types":"off",
    "no-undef":"off",
    "@typescript-eslint/no-unused-vars":"off",
    "vue/no-parsing-error":"off",
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

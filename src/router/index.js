/*
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-07-26 09:15:13
 * @LastEditors: liugm
 * @LastEditTime: 2021-08-02 08:59:31
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    meta:'地图',
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  }
  ,
  {
    path: '/Point',
    name: 'Point',
    meta:'点Point',
    component: () => import(/* webpackChunkName: "about" */ '../views/entity/Point.vue')
  },
  {
    path: '/Box',
    name: 'Box',
    meta:'盒子Box',
    component: () => import(/* webpackChunkName: "about" */ '../views/entity/Box.vue')
  },{
    path: '/Billboard',
    name: 'Billboard',
    meta:'广告牌',
    component: () => import(/* webpackChunkName: "about" */ '../views/entity/Billboard.vue')
  },{
    path: '/Corridor',
    name: 'Corridor',
    meta:'走廊',
    component: () => import(/* webpackChunkName: "about" */ '../views/entity/Corridor.vue')
  },{
    path: '/Cylinder',
    name: 'Cylinder',
    meta:'圆柱体',
    component: () => import(/* webpackChunkName: "about" */ '../views/entity/Cylinder.vue')
  },
  // {
  //   path: '/Test',
  //   name: 'Test',
  //   meta:'测试组件',
  //   component: Test
  // },
  // {
  //   path: '/Calendar',
  //   name: 'Calendar',
  //   meta:'日历',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router

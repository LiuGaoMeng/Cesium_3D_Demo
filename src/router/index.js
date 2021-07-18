import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'

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
    meta:'点实体',
    component: () => import(/* webpackChunkName: "about" */ '../views/Point.vue')
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

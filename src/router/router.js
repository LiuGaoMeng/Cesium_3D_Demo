import Login from '@/views/Login.vue'
import Layout from '@/views/Layout.vue'

export const routerMap =[
 
  {
    path: '/',
    name: 'Cesium实列',
    component: Layout,
    meta: {
      title: 'Cesium实列'
    },
    redirect: 'point',
    children:[
      {
        name: 'point',
        path: 'point',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Point.vue'),
        meta:{
          title:'点实体'
        }
      }
    ]
  }
  // ,{
  //   path: '/',
  //   name: 'ArcGIS实列',
  //   component: Layout,
  //   meta: {
  //     title: 'ArcGIS'
  //   },
  //   children:[
  //     {
  //       name: 'esriMap',
  //       path: 'esriMap',
  //       component: () => import(/* webpackChunkName: "about" */ '@/components/Arcmap/map.vue'),
  //       meta:{
  //         title:'简单案例'
  //       }
  //     },
  //   ]
  // }
]

export const routes =[
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'*',
    component: () =>import('@/views/Error_404.vue')
  }
]


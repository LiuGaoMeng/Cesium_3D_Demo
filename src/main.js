import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'cesium/Widgets/widgets.css'

if (process.env.NODE_ENV !== 'production')require('./mock/index')

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

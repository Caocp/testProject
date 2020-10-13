import Vue from 'vue'
import App from './App.vue'
import Button from 'ant-design-vue/lib/button';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'
import { Lazyload } from 'vant'

import './mock'
import './permission' // permission control
Vue.component(Button.name, Button);
Vue.use(Lazyload)
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

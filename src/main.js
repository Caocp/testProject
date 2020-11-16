import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'
import { Lazyload, DropdownMenu, Uploader, Dialog, DropdownItem, Collapse, Calendar ,CollapseItem,Col, Row, NavBar, Button, Cell, CellGroup, Tab, Tabs, List, PullRefresh, Form, Field, Picker, Popup, DatetimePicker, Swipe, SwipeItem, Image } from 'vant'

import './mock'
import './permission' // permission control
Vue.component(Button.name, Button);
Vue.use(Lazyload)
Vue.use(Antd)
Vue.use(Calendar)
Vue.use(Dialog)
Vue.use(Uploader)
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(PullRefresh)
Vue.use(Form)
Vue.use(Field)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Image)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

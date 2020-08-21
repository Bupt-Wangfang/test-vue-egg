import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem } from 'vant'
import axios from "axios"

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

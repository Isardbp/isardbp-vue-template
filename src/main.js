import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'

window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

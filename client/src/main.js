import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import wysiwyg from 'vue-wysiwyg'
import '../node_modules/vue-wysiwyg/dist/vueWysiwyg.css'

Vue.use(wysiwyg, {})
Vue.config.productionTip = false
Vue.use(Buefy)
Vue.prototype.axios = axios.create({
  baseURL: 'http://localhost:3000'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

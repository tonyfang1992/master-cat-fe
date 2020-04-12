import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(
  faUserSecret,
  faUser,
  faSearch,
  faShoppingCart
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

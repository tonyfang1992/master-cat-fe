import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faSearch, faShoppingCart, faBolt, faFireAlt, faShippingFast, faAward, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(
  faUserSecret,
  faUser,
  faSearch,
  faShoppingCart,
  faBolt,
  faFireAlt,
  faShippingFast,
  faAward,
  faMinusSquare,
  faPlusSquare,
  faDollarSign
)
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

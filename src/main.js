import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import "./assets/application.css";
import { BootstrapVue } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faUser,
  faSearch,
  faShoppingCart,
  faDollarSign,
  faTimesCircle,
  faClipboardList,
  faCaretDown,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMinusSquare,
  faPlusSquare,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
library.add(
  faUserSecret,
  faUser,
  faSearch,
  faShoppingCart,
  faMinusSquare,
  faPlusSquare,
  faDollarSign,
  faTimesCircle,
  faClipboardList,
  faCheckCircle,
  faCaretDown,
  faPaw
);
Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);


Vue.config.productionTip = false
// Vue.prototype.breadcrumbs = [{ // global values
//     text: 'index',
//     href: '#'
//   }
// ];



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

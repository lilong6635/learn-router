import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/index.scss'
import registerDirective from './register-directive'

Vue.config.productionTip = false
registerDirective(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

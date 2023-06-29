import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/global.scss'
import '@/plugins/mtd'
import '@/plugins/composition-api'
import '@/plugins/mara'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h: any) => h(App),
}).$mount('#app')

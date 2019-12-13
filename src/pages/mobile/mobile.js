import Vue from 'vue'
import Mobile from './mobile.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mobile',
  router,
  components: { Mobile },
  template: '<mobile/>'
})
import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/modules/mobile/header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})

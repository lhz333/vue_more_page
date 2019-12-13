import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/modules/index/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    }
  ]
})

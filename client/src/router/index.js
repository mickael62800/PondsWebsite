import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/vue/homepage'
import pondsIndex from '@/components/vue/ponds_index'
import signIn from '@/components/vue/sign_in'
import signUp from '@/components/vue/sign_up'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Homepage', component: homepage },
    { path: '/ponds', name: 'ponds_index', component: pondsIndex },
    { path: '/user/new', name: 'user_new', component: signIn },
    { path: '/user', name: 'sign_up', component: signUp }
  ]
})

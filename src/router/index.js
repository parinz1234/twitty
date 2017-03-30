import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import SignIn from '@/components/SignIn'
import User from '@/components/User'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/signin', component: SignIn },
    { path: '/user/:id', component: User }
  ]
})

export default router

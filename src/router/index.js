import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import ProfileEdit from '@/components/ProfileEdit'
import SignIn from '@/components/SignIn'
import User from '@/components/User'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
    { path: '/signin', component: SignIn },
    { path: '/user/:id', component: User }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        next()
        return
      }
      next({ path: '/signin', query: { redirect: to.fullPath } })
    })
    return
  }
  next()
})

export default router

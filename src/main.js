import Vue from 'vue'
import router from './router'
import firebase from 'firebase'

import 'script-loader!jquery/dist/jquery.min.js'
import 'script-loader!semantic-ui-css/semantic.min.js'
import 'style-loader!semantic-ui-css/semantic.min.css'

import App from './App'


firebase.initializeApp({
  apiKey: 'AIzaSyDxNOVMQ4RZrT1V0o4tK-xBS5lmrGbDnl8',
  authDomain: 'twitty-70e66.firebaseapp.com',
  databaseURL: 'https://twitty-70e66.firebaseio.com',
  storageBucket: 'twitty-70e66.appspot.com',
  messagingSenderId: '271227359853'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

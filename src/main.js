import Vue from 'vue';
import firebase from 'firebase';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyAdHLux_W_MbMyw_388kNIbb78d48hi324',
  authDomain: 'vue-login-with-firebase.firebaseapp.com',
  databaseURL: 'https://vue-login-with-firebase.firebaseio.com',
  projectId: 'vue-login-with-firebase',
  storageBucket: '',
  messagingSenderId: '74051838231',
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

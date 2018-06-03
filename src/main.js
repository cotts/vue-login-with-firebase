import Vue from 'vue';
import firebase from 'firebase';
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Toaster, { timeout: 3000 });

let app;

/** firebase config */
const config = {
  apiKey: 'AIzaSyAdHLux_W_MbMyw_388kNIbb78d48hi324',
  authDomain: 'vue-login-with-firebase.firebaseapp.com',
  databaseURL: 'https://vue-login-with-firebase.firebaseio.com',
  projectId: 'vue-login-with-firebase',
  storageBucket: '',
  messagingSenderId: '74051838231',
};

/** initialize firebase */
firebase.initializeApp(config);

/** check the status of auth to create the view */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
});

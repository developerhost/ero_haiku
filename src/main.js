import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAXyFFBfwUZTciEzX48k8pikUoy4kx9dFo",
    authDomain: "ero-haiku-794a8.firebaseapp.com",
    projectId: "ero-haiku-794a8",
    storageBucket: "ero-haiku-794a8.appspot.com",
    messagingSenderId: "1084177924156",
    appId: "1:1084177924156:web:098f5cc1a96e4f172f4339",
    measurementId: "G-Y6YHZDPMJ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

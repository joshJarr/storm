import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/database';

Vue.config.productionTip = false

var config = {
	apiKey: "AIzaSyAkn3BnupvpeJyn_rXU6POkfcA-oCP1Tdg",
	authDomain: "storm-90c94.firebaseapp.com",
	databaseURL: "https://storm-90c94.firebaseio.com",
	projectId: "storm-90c94",
	storageBucket: "storm-90c94.appspot.com",
	messagingSenderId: "446780959467"
};
firebase.initializeApp(config);

new Vue({
  render: h => h(App)
}).$mount('#app')

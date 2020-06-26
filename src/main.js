import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// buefy

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

// Bootstrap Vue

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Element UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//Firebase

import Firebase from 'firebase'


 const FirebaseConfig = {
  apiKey: "AIzaSyBuNM9UgPbgvs7bC0PsNJO48ZfbRSvY11c",
  authDomain: "vue-crud-rest01.firebaseapp.com",
  databaseURL: "https://vue-crud-rest01.firebaseio.com",
  projectId: "vue-crud-rest01",
  storageBucket: "vue-crud-rest01.appspot.com",
  messagingSenderId: "98556152904",
  appId: "1:98556152904:web:c04a2858e8a6c266f21c7d"
};


 // Agregar su objeto de configuración según su proyecto

Firebase.initializeApp(FirebaseConfig)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

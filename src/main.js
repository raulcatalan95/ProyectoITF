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
  apiKey: "AIzaSyA8uZ3csSEP2_fOxKs9SBLn0s-PKTbVL5A",
  authDomain: "proyectoitf.firebaseapp.com",
  databaseURL: "https://proyectoitf.firebaseio.com",
  projectId: "proyectoitf",
  storageBucket: "proyectoitf.appspot.com",
  messagingSenderId: "873868213772",
  appId: "1:873868213772:web:31d6264d64def032bf3829",
  measurementId: "G-VR9BGWRTDD",

};


 // Agregar su objeto de configuración según su proyecto

Firebase.initializeApp(FirebaseConfig)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

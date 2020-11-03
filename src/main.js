import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import * as firebase from "firebase";
import "@/theme/index.css";
require("dotenv").config();

// Initialize Firebase

firebase.initializeApp({
  apiKey: "AIzaSyA4mGLljMAzw1t3j7pOMhJUmTNhPGS6mfY",
  authDomain: "lunchapals-f.firebaseapp.com",
  databaseURL: "https://lunchapals-f.firebaseio.com",
  projectId: "lunchapals-f",
  storageBucket: "lunchapals-f.appspot.com",
  messagingSenderId: "1078034249838",
  appId: "1:1078034249838:web:5078c103852d1d57640e7f",
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

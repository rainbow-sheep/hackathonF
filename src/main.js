import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import * as firebase from "firebase";
import "@/theme/index.css";
require("dotenv").config();

// Initialize Firebase

firebase.initializeApp(JSON.parse(process.env.FIREBASECONFIG));

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

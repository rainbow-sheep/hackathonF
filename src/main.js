import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import * as firebase from "firebase";
import "@/theme/index.css";
const configOptions = {
  apiKey: "AIzaSyAVJYyi6Jc5pArnFBQUJqQ0reGb5Nxncvs",
  authDomain: "carbon-vault-264802.firebaseapp.com",
  databaseURL: "https://carbon-vault-264802.firebaseio.com",
  projectId: "carbon-vault-264802",
  storageBucket: "carbon-vault-264802.appspot.com",
  messagingSenderId: "717670595891",
  appId: "1:717670595891:web:d899acd0816fcffeea1246",
  measurementId: "G-JELDNKJ3FB"
};

firebase.initializeApp(configOptions);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

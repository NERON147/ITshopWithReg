import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BuyModalComponent from '@/components/UI/BuyModal'
import DeleteProductComponent from '@/components/UI/DeleteProduct'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '@/plugins/swiper'

Vue.config.productionTip = false
Vue.component('BuyModal', BuyModalComponent)
Vue.component('DeleteProd', DeleteProductComponent)


import '@/assets/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyAf03M5Zs-_kjCa5yruXoAN9Azg61hIkis",
  authDomain: "online-store-ed667.firebaseapp.com",
  projectId: "online-store-ed667",
  storageBucket: "online-store-ed667.appspot.com",
  messagingSenderId: "830004881683",
  appId: "1:830004881683:web:37591fff8a391062f4d2e6",
  measurementId: "G-YP6JS24FW1"
}; 

initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  created(){
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    this.$store.dispatch('autoLoginUser', user)
  }
})
  },
  render: h => h(App)
}).$mount('#app')





import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

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
  render: h => h(App)
}).$mount('#app')




const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  centeredSlides: true,
  speed: 600,
    grabCursor: true,
    initialSlide: 0,
    autoplay : {
      delay: 1000,
      disableOnInteraction: false,
    },
    
    loop: true,
    breakpoints: {
      1000: {
        slidesPerView: 2,
        
      },
      700: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 1,
        
      },
      320: {
        slidesPerView: 1,
        
      }
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
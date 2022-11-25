import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products.js'
import user from './modules/user.js'
import common from './modules/common.js'
import orders from './modules/orders'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    user,
    common,
    orders
  }
})

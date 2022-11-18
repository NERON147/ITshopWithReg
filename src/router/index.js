import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Products/Product.vue'
import NewProduct from '@/views/Products/NewProduct.vue'
import ProductList from '@/views/Products/ProductList.vue'
import Checkout from '@/views/Checkout.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/new',
    name: 'newproduct',
    component: NewProduct
  },
  {
    path: '/List',
    name: 'list',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'cart',
    component: Checkout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

<template>
  <v-container text-center>
    <h1>Cart</h1>
    <v-container>
      <v-row>
        <v-col sm="8" class="cart" >
          <div class="cart-item d-flex" v-for="(product, index) in PRODUCTS" :key="index">
            <div class="title-card-wrapper">
              <img :src="product.imageSrc" alt="" class="cart-img" />
              <span class="ml-6 title-text">{{ product.title }}</span>
            </div>
            <div class="price-wrap">
            <div class="price-text mb-2 mt-10">{{ product.price }} $</div>
            <div>
                <button class="countbtn" @click="DECREMENT(index)">-</button>
                <span class="input-count">{{product.quantity}}</span>
                <button class="countbtn" @click="INCREMENT(index)">+</button>
            </div>
            <button class="mt-10 deletebtn" @click="DELETE(index)">Удалить товар</button>
            </div>
          </div>
        </v-col>
        <v-col sm="4" >
          <v-card class="result"> 1234 </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {
    PRODUCTS() {
      return this.$store.getters.CART;
    },
  },
  methods: {
     DELETE(index) {
      this.$store.dispatch('DELETE_FROM_CART', index)
    },
    INCREMENT(index) {
      this.$store.dispatch('INCREMENT_CART_ITEM', index)
    },
    DECREMENT(index) {
      this.$store.dispatch('DECREMENT_CART_ITEM', index)
    },
  },
};
</script>

<style>
</style>
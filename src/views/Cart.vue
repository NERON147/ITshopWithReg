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
          <v-card class="result"> 
            <div>
            ОБЩАЯ СУММА:
            {{cartTotalCost.toLocaleString()}} $
            </div>
            <div>
              <BuyModal :product="product" @onSubmit='onSubmit()'></BuyModal>

            </div>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
       product: null,
      
    };
  },
  computed: {
    PRODUCTS() {
      return this.$store.getters.CART;
    },
     cartTotalCost() {
            let result = []

            if (this.PRODUCTS.length) {
               for (let item of this.PRODUCTS) {
                result.push(item.price * item.quantity)
            }

            result = result.reduce(function (sum, el){
                return sum + el
            }) 

            return result  
            } else {
                return 0
            }
            
           
        }
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

    onSubmit() {
      
      this.product.forEach((item) =>{
        const productItem = {
          title: item.title,
          price: item.price,
          quantity: item.quantity 
        }
         console.log(productItem)
      this.$store.dispatch('pushOrder', productItem)
      })
      
    }
  },
  created () {
    this.product = this.$store.getters.CART;
  }
};
</script>

<style>
</style>
<template>
  <v-container>
    <section elevation="13" class="product mt-3" v-if="!loading">
      <v-row>
        <v-col wrap xs='12' lg='6'>
          <img :src="product.imageSrc" alt="" class="product-img d-flex justify-center">
        </v-col>
      
        <v-col wrap xs='12' lg='6'>
          <div class="product-info">
            <h5 class="product-title mb-3 mt-3">{{product.title}}</h5>
            <p class="product-category title">
              <span class="product-title">Vendor: </span> {{product.vendor.charAt(0).toUpperCase() + product.vendor.substr(1)}}
            </p>
            <p class="product-price title">
              <span class="product-title">Price: </span> {{product.price}}$
            </p>
            <p class="product-color title">
              <span class="product-title">Color:</span> 
              <span
              :title="'product.color'"
              :style="{backgroundColor: product.color}"
              class="product-color-bg"
              ></span>
            </p>
            <p class="title">
              <span class="product-title">Material: </span> {{product.material.charAt(0).toUpperCase() + product.material.substr(1)}}
            </p>
            <div class="title mb-5">
              <p class="product-title mb-2">Description: </p>{{product.description}}
            </div>
            <EditProduct :product='product' v-if="isOwner" class="edit"></EditProduct>
            <BuyModal :product='product'></BuyModal>
            <DeleteProd :product='product'></DeleteProd>
          </div>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import EditProduct from '@/components/UI/EditProduct.vue'

export default {
components: {EditProduct},
  props: ['id'],

   data () {
    return {
       product: null,
    }
},
created () {
    let id = this.$route.params.id
    this.product = this.$store.getters.GET_PRODUCT(id)
},
computed: {
  loading () {
    return this.$store.getters.loading
  },
  isOwner () {
    return this.product.ownerId === this.$store.getters.user.id
  }
},
methods: {
    onDell (product) {
      this.$store.dispatch('dellProduct', product.id)
    }

}
}
</script>

<style>
</style>
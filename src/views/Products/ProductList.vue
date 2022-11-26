<template>
  <v-container>
    <v-row v-if="!loading && MY_PRODUCTS.length !== 0 ">
        <v-col
        xs='12'
        sm="6" offset-lg="3">
        <h1 class="text--secondary mb-3">My Products</h1>
        <v-card elevation="13" class="mb-7"
        v-for="(product, i) in MY_PRODUCTS" :key="i"
        >
          <v-row>
            <v-col xs='4'>
              <v-img :src="product.imageSrc" width="250px" height="auto">

              </v-img>
            </v-col>
            <v-col xs='8'>
              <v-card-text>
                <h2 class="text--primary mb-1">{{product.title}}</h2>
                <p>{{product.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/product/' + product.id">Open</v-btn>
                <DeleteProd :product='product'></DeleteProd>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        </v-col>
    </v-row>
    <v-row v-else-if="!loading && MY_PRODUCTS.length === 0">
      <v-col xs='12' class="text-center">
        <h1 class="text--primary">You have no products</h1>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col xs='12' class="text-xs-center">
        <v-sheet class="pa-3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="500"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>
          <v-sheet class="pa-3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="500"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>
          <v-sheet class="pa-3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="500"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    MY_PRODUCTS () {
      return this.$store.getters.MY_PRODUCTS
    },
    loading () {
    return this.$store.getters.loading
  }
  },
  
  
}
</script>

<style>

</style>
<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" xs="12">
          <!-- Slider main container -->
          <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div
                class="swiper-slide"
                v-for="product in PROMO_PRODUCTS"
                :key="product.id"
              >
                <img :src="product.imageSrc" alt="" />
              </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container grid-list-lg v-if="!loading">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="product in PRODUCTS"
          :key="product.id"
        >
          <v-card class="mx-auto" max-width="500">
            <router-link :to="'/product/' + product.id"
              ><v-img
                class="white--text align-end"
                height="300px"
                :src="product.imageSrc"
              >
                <v-card-title>{{ product.title }}</v-card-title>
              </v-img>
            </router-link>
            <v-card-subtitle class="pb-0">
              {{ product.vendor }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ product.color }} {{ product.material }}</div>

              <div>{{ product.description }}</div>
              <div class="price">Price:{{ product.price }}$</div>
            </v-card-text>

            <v-card-actions>
              <v-btn dark color="dark" :to="'/product/' + product.id">
                Description
              </v-btn>

              <BuyModal :product="product"></BuyModal>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12" sm="12" md="6"
          lg="4" >
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
        <v-col cols="12" md="6"
          lg="4" >
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
        <v-col cols="12" md="6"
          lg="4" >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  computed: {
    PROMO_PRODUCTS() {
      return this.$store.getters.PROMO_PRODUCTS;
    },
    PRODUCTS() {
      return this.$store.getters.PRODUCTS;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style>
</style>
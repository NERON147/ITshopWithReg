<template>
  <v-container>
    <v-row v-if="!loading && orders.length !== 0">
      <v-col sm="6" offset-lg="3">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list flat subheader three-line >
          <v-list-item-group
            multiple
            active-class=""
            avatar
            v-for="(order, i) in orders"
            :key="i"
          >
            <v-list-item>
              <template>
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    @change="markDone(order)"
                    :input-value="order.done"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :to="'/product/' + order.productId" class="primary"
                    >Open</v-btn
                  >
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

  <v-row v-else-if="orders.length == 0">
    <v-col>
      <h1 class="text-center">No orders</h1>
    </v-col>
  </v-row>

    <v-row v-else>
      <v-col sm="6" offset-lg="3">
        <v-list flat subheader three-line>
          <v-list-item-group multiple active-class="" avatar>
            <v-list-item>
              <template>
                <v-list-item-action>
                  <v-sheet class="">
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="20"
                      max-height="20"
                      type="button"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>
                    <v-sheet class="pa-2">
                      <v-skeleton-loader
                        class=""
                        max-width="100"
                        max-height="40"
                        type="text"
                      ></v-skeleton-loader> </v-sheet
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    ><v-sheet class="pa-2">
                      <v-skeleton-loader
                        class=""
                        max-width="200"
                        max-height="20"
                        type="text"
                      ></v-skeleton-loader> </v-sheet
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-sheet class="">
                    <v-skeleton-loader
                      class=""
                      max-width="100"
                      max-height="50"
                      type="button"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col sm="6" offset-lg="3">
        <v-list flat subheader three-line>
          <v-list-item-group multiple active-class="" avatar>
            <v-list-item>
              <template>
                <v-list-item-action>
                  <v-sheet class="">
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="20"
                      max-height="20"
                      type="button"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>
                    <v-sheet class="pa-2">
                      <v-skeleton-loader
                        class=""
                        max-width="100"
                        max-height="40"
                        type="text"
                      ></v-skeleton-loader> </v-sheet
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    ><v-sheet class="pa-2">
                      <v-skeleton-loader
                        class=""
                        max-width="200"
                        max-height="20"
                        type="text"
                      ></v-skeleton-loader> </v-sheet
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-sheet class="">
                    <v-skeleton-loader
                      class=""
                      max-width="100"
                      max-height="50"
                      type="button"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col sm="6" offset-lg="3">
        <v-list flat subheader three-line>
          <v-list-item-group multiple active-class="" avatar>
            <v-list-item>
              <template>
                <v-list-item-action>
                  <v-sheet class="">
                    <v-skeleton-loader
                      class="mx-auto"
                      max-width="20"
                      max-height="20"
                      type="button"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>
                    <v-sheet class="pa-2">
                      <v-skeleton-loader
                        class=""
                        max-width="100"
                        max-height="40"
                        type="text"
                      ></v-skeleton-loader> </v-sheet
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    ><v-sheet class="pa-2">
                      <v-skeleton-loader
                        class=""
                        max-width="200"
                        max-height="20"
                        type="text"
                      ></v-skeleton-loader> </v-sheet
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-sheet class="">
                    <v-skeleton-loader
                      class=""
                      max-width="100"
                      max-height="50"
                      type="button"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    markDone(order) {
      this.$store.dispatch('markOrderDone', order.id)
      .then(() => {
        order.done = !order.done
      })
      .catch(() => {})
    },
  },
  created() {
    this.$store.dispatch("fetchOrders");
  },
  computed: {
    orders() {
      return this.$store.getters.GET_ORDERS;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style>
</style>
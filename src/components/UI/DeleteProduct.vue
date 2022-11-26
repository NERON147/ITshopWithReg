<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red"  v-bind="attrs" v-on="on"
        >Delete</v-btn
      >
    </template>
    <v-card>
      <v-container>
        <div class="row">
          <div class="col" xs="12">
            <v-card-title>
              <h1 class="text--primary">Are you sure?</h1>
            </v-card-title>
          </div>
        </div>
        <div class="row">
          <div class="col" xs="12">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" outlined @click="onCancel">Cancel</v-btn>
              <v-btn dark color="light-blue darken-4" @click="onDell">Delete</v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: [
        'product',
    ],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onCancel () {
        this.dialog = false
    },

    onDell () {
            this.$store.dispatch('dellProduct', this.product.id)
            this.dialog = false
        }
  },
};
</script>

<style>
</style>
<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="primary" v-bind="attrs" v-on="on">Buy</v-btn>
    </template>
    <v-card>
      <v-container>
        <div class="row">
          <div class="col" xs="12">
            <v-card-title>
              <h1 class="text--primary">Do want buy it?</h1>
            </v-card-title>
          </div>
        </div>
        <div class="row">
          <div class="col" xs="12">
            <v-card-text>
              <v-text-field
                name="name"
                label="Your name?"
                type="text"
                v-model="name"
                hide-details="auto"
                required
                :rules="[(v) => !!v || 'Name is require']"
              ></v-text-field>
              <v-text-field
                name="phone"
                label="Your phone"
                type="tel"
                v-model="phone"
                hide-details="auto"
                required
                :rules="[(v) => !!v || 'Phone is require']"
              ></v-text-field>
            </v-card-text>
          </div>
        </div>
        <div class="row">
          <div class="col" xs="12">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark
                color="light-blue darken-4"
                outlined
                @click="onCancel"
                :disabled="localLoading"
                >Close</v-btn
              >
              <v-btn
               
                v-on:click="onSubmit(product)"
                @click="onSave"
                :disabled="localLoading || !this.name || !this.phone"
                :loading="localLoading"
                class="success"
                >Buy it!</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      dialog: false,
      name: "",
      phone: "",
      localLoading: false,
    };
  },
  methods: {
    onCancel() {
      (this.name = ""), (this.phone = ""), (this.dialog = false);
    },

    onSave() {
      if (this.name !== "" && this.phone !== "") {
        this.loacalLOading = true;
        let message = `<b> Номер телеофна: </b> ${this.phone} \n <b> Имя: </b>  ${this.name} \n`
        this.$store
          .dispatch("createOrder", {
            name: this.name,
            phone: this.phone,
            productId: this.product.id,
            ownerId: this.product.ownerId,
            done: false
          })
          .finally(() => {
            (this.name = ""), (this.phone = ""), (this.localLoading = false);
            this.dialog = false;
            this.$store.dispatch("pushOrder", message)
          });
      }
    },


    onSubmit () {
        this.$emit('onSubmit', this.product)
      },
  },
  computed: {
  loading () {
    return this.$store.getters.loading
  },
}
};
</script>

<style>
</style>
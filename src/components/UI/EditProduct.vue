<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="healine" v-bind="attrs" v-on="on"
        >Edit</v-btn
      >
    </template>
    <v-card>
      <v-container>
        <div class="row">
          <div class="col" xs="12">
            <v-card-title>
              <h1 class="text--primary">Edit Proudct</h1>
            </v-card-title>
          </div>
        </div>
        <div class="row">
          <div class="col" xs="12">
            <v-card-text>
              <v-text-field
                name="title"
                label="Titile"
                type="text"
                v-model="editedTitle"
                hide-details="auto"
              ></v-text-field>
              <v-textarea
              auto-grow
                name="description"
                label="Description"
                type="text"
                v-model="editedDescription"
                hide-details="auto"
              ></v-textarea>
            </v-card-text>
          </div>
        </div>
        <div class="row">
          <div class="col" xs="12">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" outlined @click="onCancel">Cancel</v-btn>
              <v-btn dark color="light-blue darken-4" @click="onSave">Save</v-btn>
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
      editedTitle: this.product.title,
      editedDescription: this.product.description
    };
  },
  methods: {
    onCancel () {
        this.editedTitle = this.product.title
        this.editedDescription = this.product.description
        this.dialog = false
    },

    onSave () {
        if (this.editedTitle !== '' && this.editedDescription !== '') {
            this.$store.dispatch('createProducts', {
                title: this.editedTitle,
                description: this.editedDescription,
                id: this.product.id
            })
            this.dialog = false
        }
    }
  },
};
</script>

<style>
</style>
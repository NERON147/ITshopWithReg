<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-lg="3">
        <h1 class="text--secondary mb-3">Create new product</h1>
        <v-form ref="form" v-model="valid">
          <v-text-field
            label="Title"
            required
            :rules="[(v) => !!v || 'Title is require']"
            hide-details="auto"
            name="title"
            type="text"
            v-model="title"
          ></v-text-field>
          <v-text-field
            label="Vendor Product"
            name="vendor"
            type="text"
            v-model="vendor"
          ></v-text-field>
          <v-text-field
            label="Color Product"
            name="color"
            type="text"
            v-model="color"
          ></v-text-field>
          <v-text-field
            label="Material Product"
            name="material"
            type="text"
            v-model="material"
          ></v-text-field>
          <v-text-field
            label="Price Product"
            name="price"
            type="text"
            required
            :rules="[(v) => !!v || 'Price is require']"
            v-model="price"
          ></v-text-field>
          <v-textarea
            auto-grow
            label="Description Product"
            name="description"
            type="text"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-row class="mb-3">
          <v-col cols="12" xs="12">
            <v-btn class="warning" @click="upload">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFileChange"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12">
            <img :src="imageSrc" height="200px" alt="" v-if="imageSrc" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12">
            <v-switch
              color="primary"
              v-model="promo"
              label="Add to Promo?"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12">
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid || loading || !image"
              :loading="loading"
              class="success"
              @click="createProduct"
              >Create product</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      promo: false,
      id: '',
      title: "",
      vendor: "",
      color: "",
      material: "",
      price: 0,
      description: "",
      promo: false,
      valid: false,
      image: null,
      imageSrc: "",
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    createProduct() {
      if (this.$refs.form.validate() && this.image) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          color: this.color,
          material: this.material,
          price: this.price,
          description: this.description,
          promo: this.promo,
          imageSrc: this.imageSrc,
          
        };
        this.$store.dispatch("createProduct", product);
        
        return (
          (this.title = ""),
          (this.vendor = ""),
          (this.color = ""),
          (this.material = ""),
          (this.price = ""),
          (this.description = ""),
          (this.promo = false),
          (this.imageSrc = "")
        );
      }
    },
    upload() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
      this.image = file;
    },
  },
};
</script>

<style>
</style>
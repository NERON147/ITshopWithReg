<template>
  <v-app>
    <navbar />
    
  <template v-if="error">
    <v-snackbar
    color="error"
    :multi-line="true"
      @input="closeError"
      :value= "true"
    >
      {{ error }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          v-bind="attrs"
          @click.native="closeError"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import navbar from "@/components/Navbar.vue";

export default {
  components: {
    navbar,
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
   created(){
    this.$store.dispatch('loadProducts')
    
   }
};
</script>

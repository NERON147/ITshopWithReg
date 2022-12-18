<template>
<div id="app">
  <v-app>
    <Navbar></Navbar>
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
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
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


<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.url">
          <v-list-item-icon>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item 
        @click="onLogout"
        v-if="isUserLoggedIn"
        >
          <v-list-item-icon>
            <v-icon>
              mdi-exit-to-app
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="'Logout'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense shaped dark>
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <router-link :to="'/'"
        ><v-toolbar-title class="cvet"
          >Online store</v-toolbar-title
        ></router-link
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="hidden-sm-and-down"
      >
        {{ link.title }} 
        <v-icon right>{{ link.icon }}</v-icon>
      </v-btn>
      <span class="cart-length">{{CART.length}}</span>
      
      <v-btn
        @click="onLogout"
        v-if="isUserLoggedIn"
      >
        Logout
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
    };
  },
  methods: {
    onLogout (){
      this.$store.dispatch('logoutUser')
      const path = '/'
      if (this.$route.path !== path) {
        this.$router.push('/');
      }
      
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    CART () {
      return this.$store.getters.CART
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          {
            title: "Check out",
            icon: "mdi-cart-variant",
            url: "/checkout",
          },
          {
            title: "New Product",
            icon: "mdi-plus-box",
            url: "/new",
          },
          {
            title: "My Products",
            icon: "mdi-clipboard-list",
            url: "/list",
          },
          {
            title: "Cart",
            icon: "mdi-cart-variant",
            url: "/cart",
          },
        ];
      }
      return [
        {
          title: "Login",
          icon: "mdi-account-box",
          url: "/login",
        },
        {
          title: "Register",
          icon: "mdi-account-plus",
          url: "/register",
        },
        {
            title: "Cart",
            icon: "mdi-cart-variant",
            url: "/cart",
          },
      ];
    },
  },
};
</script>

<style>
.cvet {
  color: #fcfcfc;
}
</style>
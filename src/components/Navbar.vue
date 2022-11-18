<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
    <v-list>
      <v-list-item
      v-for="(link, index) in links" :key='index' :to="link.url"
      >
        <v-list-item-icon>
          <v-icon>
            {{link.icon}}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>


    <v-toolbar dense shaped dark>
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-app-bar-nav-icon>

       <router-link :to="'/'"><v-toolbar-title class="cvet">Online store</v-toolbar-title></router-link> 

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


      <v-btn v-for="(link, index) in links" :key='index' :to="link.url" class="hidden-sm-and-down">
        {{link.title}}
        <v-icon right>{{link.icon}}</v-icon>
      </v-btn>
    </v-toolbar>


  <!-- Sizes your content based upon application components -->
  <v-main>

   

      <!-- If using vue-router -->
      <router-view></router-view>
    
  </v-main>
  </div>
</template>

<script>
export default {
data () {
    return {
        sideNav: false,

        links: [
            {
                title: 'Login',
                icon: 'mdi-account-box',
                url: '/login'
            },
            {
                title: 'Register',
                icon: 'mdi-account-plus',
                url: '/register'
            },
            {
                title: 'Cart',
                icon: 'mdi-cart-variant',
                url: '/cart'
            },
            {
                title: 'New Product',
                icon: 'mdi-plus-box',
                url: '/new'
            },
            {
                title: 'My Products',
                icon: 'mdi-clipboard-list',
                url: '/list'
            }
        ]
    }
}
}
</script>

<style>
.cvet {
  color: #FCFCFC
}
</style>
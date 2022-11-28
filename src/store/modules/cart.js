import Vue from 'vue'

export default {
    state: {
        cart: []
    },
    mutations: {
        SET_TO_CART (state, product){
            let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }

        })
        if (!isProductExists) {
          state.cart.push(product)
        }
    } else {
        state.cart.push(product)
        // Vue.set(product, 'quantity', 1);
      }
        },
        REMOVE_FROM_CART (state, index) {
            state.cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(state.cart))
            
          },
          INCREMENT (state, index) {
            state.cart[index].quantity++
            localStorage.setItem('cart', JSON.stringify(state.cart))
      
          },
          DECREMENT (state, index) {
            if(state.cart[index].quantity > 1) {
              state.cart[index].quantity--
            localStorage.setItem('cart', JSON.stringify(state.cart))
      
            }
          },
    },
    actions: {
        ADD_TO_CART({commit}, product) {
            commit('SET_TO_CART', product)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
          },
          INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
          },
          DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
          },
    },
    getters: {
        CART(state) {
            return state.cart
        }
    }
}
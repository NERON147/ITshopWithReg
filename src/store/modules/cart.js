import Vue from 'vue'

import axios from 'axios'

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
      localStorage.setItem('cart', JSON.stringify(state.cart))
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
          UPDATE_CART (state, cart) {
            state.cart = cart
          }
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
          setCartFromLC({commit}, cart) {
            commit('UPDATE_CART', cart)
          },
          async pushOrder({ commit }, message) {
            const orderToTG = message
            const chatId = "-1001585192425";
            try {
                commit('clearError')
                commit('setLoading', true)
                await axios.post(`https://api.telegram.org/bot5704317545:AAF437LLv5g5GPegKVvaVvQgPV-v7nnqHFI/sendMessage`, {
                    chat_id: chatId,
                    parse_mode: 'html',
                    text: orderToTG,
                })
                commit('setLoading', false)
            localStorage.clear()
                

            }
            catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
    },
    getters: {
        CART(state) {
            return state.cart
        }
    }
}
import axios from 'axios'


export default {
    state: {
        orders: [

        ]
    },
    mutations: {
        loadOrders(state, payload) {
            state.orders = payload
        },
        FETCH_ORDERS(state, resultOrders) {
            state.orders = resultOrders
        }
    },
    actions: {
        async createOrder({ commit, getters }, { ownerId, name, phone, productId, done }) {
            const newOrder = {
                name,
                phone,
                productId,
                done: false
            }
            try {
                commit('clearError')
                commit('setLoading', true)
                await axios.post(`https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/users/${getters.user.id}/orders.json`, newOrder)
                commit('setLoading', false)

            }
            catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async fetchOrders ({commit, getters}){
            commit('setLoading', true)
            await axios.get(`https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/users/${getters.user.id}/orders.json`)
            .then(res => {
              const resultOrders = []
              for(let key in res.data){
                resultOrders.push({...res.data[key], id: key})
              }
              commit("FETCH_ORDERS", resultOrders)
            })
            commit('setLoading', false)
          },
          async markOrderDone({ commit, getters }, id) {
            const updateProduct = {
              done: true
            }
            try {
              commit('clearError')
              commit('setLoading', true)
              await axios.patch(`https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/users/${getters.user.id}/orders/${id}.json`, updateProduct)
              commit('setLoading', false)
            }
            catch (error) {
              commit('setLoading', false)
              commit('setError', error.message)
              throw error
            }
          }
    },
    getters: {
        doneOrders (state) {
            return state.orders.filter(order => order.done)
        },
        undoneOrders (state) {
            return state.orders.filter(order => !order.done)
        },

        GET_ORDERS (state, getters) {
            return getters.undoneOrders.concat(getters.doneOrders)
        }
    }
}
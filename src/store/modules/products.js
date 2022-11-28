
import axios from 'axios'



export default ({
  state: {
    products: [

    ]
  },

  mutations: {

    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {

    async createProduct({ commit, getters }, payload) {
      const newProduct = {
        title: payload.title,
        price: payload.price,
        vendor: payload.vendor,
        color: payload.color,
        material: payload.material,
        description: payload.description,
        imageSrc: payload.imageSrc,
        promo: payload.promo,
        ownerId: getters.user.id
      }
      try {
        commit('clearError')
        commit('setLoading', true)
        await axios.post('https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/products.json', newProduct)
        commit('setLoading', false)

      }
      catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }


    },
    async loadProducts({ commit }) {
      commit('setLoading', true)
      await axios.get('https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/products.json')
        .then(res => {
          const products = []
          for (let key in res.data) {
            products.push({ ...res.data[key], id: key,  })
          }
          commit("SET_PRODUCTS", products)
        })
      commit('setLoading', false)
    },
    async updateProducts({ commit }, { title, description, id }) {
      const updateProduct = {
        id: id,
        title: title,
        description: description,
      }
      try {
        commit('clearError')
        commit('setLoading', true)
        await axios.patch(`https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`, updateProduct)
        commit('setLoading', false)
      }
      catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async dellProduct({ commit }, id) {
      try {
        commit('clearError')
        commit('setLoading', true)
        await axios.delete(`https://online-store-ed667-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`)
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
    PRODUCTS(state) {
      return state.products
    },
    PROMO_PRODUCTS(state) {
      return state.products.filter(products => {
        return products.promo
      })
    },
    MY_PRODUCTS(state, getters) {
      return state.products.filter(product => {
        return product.ownerId === getters.user.id
      })
    },
    GET_PRODUCT: (state) => (id) => {
      return state.products.find(product => product.id == id)
    }

  },


})


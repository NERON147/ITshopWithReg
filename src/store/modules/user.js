import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


class User {
    constructor(id) {
        this.id = id
    }
}

export default {
    state: {
        user: null
    },
    actions: {
        async registerUser({ commit }, { email, password }) {
            commit('clearError')
            commit('setLoading', true)

            try {
                const user = await createUserWithEmailAndPassword(getAuth(), email, password)
                commit('setUser', new User(user.user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        async loginUser ({commit}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)

            try {
                const user = await signInWithEmailAndPassword(getAuth(), email, password)
                commit('setUser', new User(user.user.uid))
                commit('setLoading', false)
                
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
                
            }
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
}
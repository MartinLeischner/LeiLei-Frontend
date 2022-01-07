import { createStore } from 'vuex'
import axios from 'axios'

const endpoint = process.env.VUE_APP_BACKEND_API_URL + '/rezepte'

const store = createStore({
  state: {
    rezepte: { }
  },
  actions: {
    fetchRezepte ({ commit }) {
      return axios.get(endpoint)
        .then(res => {
          if (res.data) {
            console.log('Rezepte fetched: ', res.data)
            res.data.forEach(rezept => {
              commit('addRezept', rezept)
            })
          }
          return res
        })
        .catch(error => console.error('Error during fetch all rezepte: ', error))
    },
    fetchRezeptById ({ commit }, id) {
      return axios.get(endpoint + '/' + id)
        .then(res => {
          if (res.data) {
            console.log('Rezept fetched: ', res.data)
            commit('addRezept', res.data)
          }
          return res
        })
        .catch(error => console.error('Error during fetch single rezept: ', error))
    },
    updateRezept ({ commit }, id, newRezept) {
      return axios.put(endpoint + '/' + id, newRezept)
        .then(res => {
          if (res.data) {
            console.log('Rezept updated: ', res.data)
            commit('addRezept', res.data)
          }
          return res
        })
        .catch(error => console.error('Error during update: ', error))
    },
    deleteRezept ({ commit }, id) {
      return axios.delete(endpoint + '/' + id)
        .then(res => {
          console.log('Rezept deleted: ', res.data)
          commit('removeRezeptById', id)
        })
        .catch(error => console.error('Error during delete: ', error))
    }
  },
  mutations: {
    addRezept (state, rezept) {
      this.state.rezepte[rezept.id] = rezept
    },
    removeRezeptById (state, rezeptId) {
      delete this.state.rezepte[rezeptId]
    }
  },
  getters: {
    getRezepte (state) {
      return Object.values(state.rezepte)
    },
    getRezeptById: (state) => (id) => {
      return state.rezepte[id]
    },
    filterRezepteByDifficulty: (state) => (difficulty) => {
      return Object.values(state.rezepte).filter(rezept => rezept.difficulty === difficulty)
    },
    size (state) {
      return Object.entries(state.rezepte).length
    },
    isEmpty (state, getters) {
      return getters.size === 0
    }
  }
})

export default store

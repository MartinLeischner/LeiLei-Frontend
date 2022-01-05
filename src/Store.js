import { createStore } from 'vuex'

const store = createStore({
  state: {
    rezepte: { }
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
    getRezepte: (state) => {
      return state.rezepte
    },
    getRezeptById: (state) => (id) => {
      if (state.rezepte[id]) {
        return state.rezepte[id]
      } else {
        return null
      }
    },
    size: (state, getters) => {
      return getters.getRezepte.length
    },
    isEmpty: (state, getters) => {
      return getters.size === 0
    }
  }
})

export default store

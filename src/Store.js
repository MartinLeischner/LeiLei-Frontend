import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      rezepte: []
    }
  },
  mutations: {
    addRezept (state, rezept) {
      this.state.rezepte.push(rezept)
    },
    remove (rezeptId) {
      const index = this.state.rezepte.findIndex(rezept => rezept.id === rezeptId)
      if (index !== -1) {
        this.state.rezepte.splice(index, 1)
      }
    }
  },
  computed: {
    size () {
      return this.state.rezepte.length
    }
  },
  getters: {
    getRezepte (state) {
      return state.rezepte
    },
    getRezeptById: (state) => (id) => {
      return state.rezepte.find(rezept => rezept.id === id)
    }
  }
})

export default store

<template>
  <div class="p-3 mb-3 bg-success text-white">
    <h1 class="m-1">Hier finden Sie unsere Rezepte</h1>
  </div>
  <div class="container">
    <RezepteCardList v-bind:rezepte=this.rezepte @rezeptCreated="addRezept"></RezepteCardList>
  </div>
</template>

<script>
import RezepteCardList from '@/components/RezepteCardList'
import axios from 'axios'

export default {
  name: 'Rezepte',
  components: { RezepteCardList },
  data () {
    return {
      rezepte: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_API_URL + '/rezepte'

    axios.get(endpoint)
      .then(response => {
        console.log('Got response from backend: ', response.data)
        if (response.data) {
          response.data.forEach(rezept => {
            this.rezepte.push(rezept)
          })
        }
        return response
      })
      .catch(error => console.log('error', error))
  },
  methods: {
    addRezept ($event) {
      console.log('Adding a new rezept: ', $event)
      this.rezepte.push($event)
    }
  }
}
</script>

<style scoped>

</style>

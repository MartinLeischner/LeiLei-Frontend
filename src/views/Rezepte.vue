<template>
  <div class="p-3 mb-3 bg-success text-white">
    <h1 class="m-1">Hier finden Sie unsere Rezepte</h1>
  </div>
  <div class="container">
    <RezepteCardList></RezepteCardList>
  </div>
</template>

<script>
import RezepteCardList from '@/components/RezepteCardList'
import axios from 'axios'

export default {
  name: 'Rezepte',
  components: { RezepteCardList },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_API_URL + '/rezepte'

    console.log('Fetch all rezepte from backend ... ')
    axios.get(endpoint)
      .then(response => {
        if (response.data) {
          console.log('Rezepte fetched: ', response.data)
          response.data.forEach(rezept => {
            this.$store.commit('addRezept', rezept)
          })
        }
        return response
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>

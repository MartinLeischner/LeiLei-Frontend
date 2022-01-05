<template>
  <div class="p-3 mb-3 bg-success text-white">
    <h1 class="m-1">Hier finden Sie unsere Rezepte</h1>
  </div>
  <div class="container">
    <RezepteCardList v-bind:rezepte=this.rezepte></RezepteCardList>
  </div>
</template>

<script>
import RezepteCardList from '@/components/RezepteCardList'
export default {
  name: 'Rezepte',
  components: { RezepteCardList },
  data () {
    return {
      rezepte: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/rezepte'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(result => result.forEach(rezept => {
        this.rezepte.push(rezept)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.rezept__gallery {
    display: flex;
    flex-direction: row;
    flex-flow: row;
}

.rezept__card {
    border-radius: 16px;
    margin: 8px;
}
</style>

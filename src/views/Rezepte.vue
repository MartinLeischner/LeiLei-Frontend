<template>
    <div class="p-3 mb-3 bg-success text-white">
        <h1 class="m3">Hier finden Sie unsere Rezepte</h1>
    </div>
    <div class="container">
        <div class="rezept__gallery">
            <div class="col col-sm-4" v-for="rezept in rezepte" :key="rezept.id">
                <div class="card rezept__card">
                    <img :src="rezept.imagePath" class="card-img-top" :alt="rezept.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ rezept.name }}</h5>
                        <div class="card-text">
                            {{ rezept.ingredient }}
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{{ rezept.time }}</li>
                                <li class="list-group-item">{{ rezept.difficulty }}</li>
                            </ul>
                        </div>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Rezepte',
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

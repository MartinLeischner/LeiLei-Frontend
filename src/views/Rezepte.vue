<template>
<h1>Hier finden Sie unsere Rezepte</h1>
  <div class="col" v-for="rezept in rezepte" :key="rezept.id">
    <div class="card" style="width: 18rem;">
     <img src="../assets/kisspng-cheese-sandwich-butterbrot-bread-bread-cheese-sandwich-5a9d7293bf4f09.1927332815202679237836.jpg" class="card-img-top" :alt="rezept.name">
      <div class="card-body">
       <h5 class="card-title">{{rezept.name}}</h5>
       <p class="card-text">{{rezept.ingredient}}</p>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">{{rezept.time}}</li>
       <li class="list-group-item">{{rezept.difficulty}}</li>
       <li class="list-group-item">A third item</li>
     </ul>
     <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
     </div>
   </div>

  </div>
<!--  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  -->
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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/rezepte'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(rezept => {
        this.rezepte.push(rezept)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>

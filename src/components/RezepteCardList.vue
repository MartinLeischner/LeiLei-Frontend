<template>
  <div class="rezept__gallery">
    <div class="col col-sm-4" v-for="rezept in rezepte" :key="rezept.id">
      <div class="rezept__card">
        <div class="rezept__badge">
          <img :src=getDifficulty(rezept) alt="Badge">
        </div>
        <div class="card">
          <img :src="rezept.imagePath" class="card-img-top" :alt="rezept.name">
          <div class="card-body">
            <h5 class="card-title">{{ rezept.name }}</h5>
            <div class="card-text">
              {{ rezept.ingredient }}
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ rezept.time }}</li>
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
  name: 'RezepteCardList',
  props: {
    rezepte: {
      type: Array,
      required: true
    }
  },
  methods: {
    getDifficulty (rezept) {
      console.log(rezept)
      if (rezept.difficulty === 0) {
        return require('../assets/leicht.png')
      }
      if (rezept.difficulty === 1) {
        const image = require('../assets/mittel.png')
        console.log(image)
        return image
      }
      if (rezept.difficulty === 2) {
        return require('../assets/schwer.png')
      }
    }
  }
}

</script>

<style scoped>
.rezept__card {
  padding: 50px;
  position: relative;
}

.rezept__card .card {
  border-radius: 18px;
}

.rezept__card .card-img-top {
  border-radius: 18px 18px 0 0;
}

.rezept__badge {
  opacity: 0;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: opacity .3s ease-in-out;
  z-index: 2;
}

.rezept__card:hover .rezept__badge {
  opacity: 1;
}

.rezept__badge img {
  height: 100px;
  width: 100px;
}
</style>

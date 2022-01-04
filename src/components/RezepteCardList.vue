<template>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="rezept in rezepte" :key="rezept.id">
            <div class="card h-100">
                <img :src="getAvatar(rezept)" class="card-img-top" :alt="rezept.name">
                <div class="card-body">
                    <h5 class="card-title">{{ rezept.name }}</h5>
                    <p class="card-text">
                        {{ rezept.name }} {{ rezept.lastName }} ist {{ rezept.difficulty ? 'leicht' : 'schwer' }} und
                        benötigt {{ rezept.ingredient }} für die Zubereitung.
                    </p>
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
      if (rezept.difficulty === 'LEICHT') {
        return require('../assets/leicht.png')
      }
      if (rezept.difficulty === 'MITTEL') {
        return require('../assets/mittel.png')
      }
      if (rezept.difficulty === 'SCHWER') {
        return require('../assets/schwer.png')
      }
    }
  }
}

</script>

<style scoped>

</style>

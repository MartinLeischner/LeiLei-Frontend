<template>
  <div class="p-3 mb-3 bg-success text-white">
    <h1 class="m-1">Hier finden Sie unsere Rezepte</h1>
  </div>
  <div class="container">
    <RezepteCardList v-if="this.rezepteSize > 0"></RezepteCardList>
    <div v-else class="alert alert-success" role="alert">
      <p>
        Keine Rezepte vorhanden.
      </p>
    </div>
  </div>
</template>

<script>
import RezepteCardList from '@/components/RezepteCardList'

export default {
  name: 'Rezepte',
  components: { RezepteCardList },
  mounted () {
    this.$store.dispatch('fetchRezepte')
  },
  computed: {
    rezepteSize: function () {
      return Object.entries(this.$store.state.rezepte).length
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

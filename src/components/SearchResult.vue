<template>
  <div class="p-3 mb-3 bg-success text-white">
    <h1 class="m-1">Deine Suchergebnisse für '{{this.searchQuery}}'</h1>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data () {
    return {
      searchQuery: ''
    }
  },
  mounted () {
    this.searchQuery = this.$route.query.q
  }
}
</script>

<style scoped>

</style>

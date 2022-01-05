<template>
  <div>Tadaaa</div>
</template>

<script>
export default {
  name: 'RezeptDetail',
  data () {
    return {
      currentRezept: null
    }
  },
  mount () {
    // TODO get id from path
    this.currentRezept = this.$store.getters.getRezeptById(1)
  }
}
</script>

<style scoped>

</style>

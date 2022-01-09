<template>
  <div class="hero container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="../assets/logo.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">LeiLei - Das Kochbuch</h1>
        <p class="lead">Willkommen im LeiLei-Kochbuch! Hier finden Sie ausgewählte Rezepte, die Lieblingsessen anderer Nutzer und alles andere für den kleinen und großen Hunger.</p>
        <div class="d-grid gap-2 d-flex justify-content-center">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4 me-md-2" disabled>Jetzt anmelden</button>
          <button type="button" class="btn btn-success btn-lg px-4" @click="this.goToRezepte">Zu den Rezepten</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    goToRezepte () {
      this.$router.push('Rezepte')
    }
  }
}
</script>

<style scoped>

</style>

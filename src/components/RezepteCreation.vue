<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#rezepte-creation-offcanvas" aria-controls="#rezepte-creation-offcanvas">
    <i class="bi bi-rezept-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="rezepte-creation-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neues Rezept</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="needs-validation text-start" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Rezeptname</label>
          <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3">
          <label for="ingredient" class="form-label">Zutaten</label>
          <input type="text" class="form-control" id="ingredient" v-model="ingredient">
        </div>
        <div class="mb-3">
          <label for="difficulty" class="form-label">Schwierigkeitsgrad</label>
          <select id="difficulty" class="form-select" v-model="difficulty">
            <option value="" selected>Choose...</option>
            <option value="LEICHT">Leicht</option>
            <option value="MITTEL">Mittel</option>
            <option value="SCHWER">Schwer</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="time" class="form-label">Zubereitungsdauer</label>
          <input type="text" class="form-control" id="time" v-model="time">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit">Erstellen</button>
          <button class="btn btn-danger" type="reset">Zurücksetzen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RezeptCreation',
  data () {
    return {
      name: '',
      ingredient: '',
      difficulty: '',
      time: ''
    }
  },
  methods: {
    createRezept () {
      console.log(this.name)
      console.log(this.ingredient)
      console.log(this.difficulty)
      console.log(this.time)
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>

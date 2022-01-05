<template>
    <button class="btn btn-success sticky-button"
            data-bs-toggle="offcanvas"
            data-bs-target="#rezepte-creation-offcanvas"
            aria-controls="#rezepte-creation-offcanvas">
        <i class="bi bi-plus-lg"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="rezepte-creation-offcanvas"
         aria-labelledby="offcanvas-label">
        <div class="offcanvas-header">
            <h5 id="offcanvas-label">Neues Rezept erstellen</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <form ref="rezeptForm" class="needs-validation text-start"
                  method="post"
                  enctype="multipart/form-data"
                  @submit="createRezept">
                <div class="mb-3">
                    <label for="image" class="form-label">Bild</label>
                    <input type="file" class="form-control" id="image" @change="onFileChanged" name="image" accept="image/png, image/jpeg"/>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Rezeptname</label>
                    <input type="text" class="form-control" id="name" v-model="name" required>
                </div>
                <div class="mb-3">
                    <label for="ingredient" class="form-label">Zutaten</label>
                    <input type="text" class="form-control" id="ingredient" v-model="ingredient" required>
                </div>
                <div class="mb-3">
                    <label for="difficulty" class="form-label">Schwierigkeitsgrad</label>
                    <select id="difficulty" class="form-select" v-model="difficulty" required>
                        <option value="" disabled selected>Choose...</option>
                        <option value="0">Leicht</option>
                        <option value="1">Mittel</option>
                        <option value="2">Schwer</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="time" class="form-label">Zubereitungsdauer</label>
                    <div class="input-group">
                      <input type="number" class="form-control" id="time" v-model="time" required>
                      <span class="input-group-text">min</span>
                    </div>
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
      name: null,
      ingredient: null,
      difficulty: null,
      time: null,
      selectedImage: null
    }
  },
  methods: {
    onFileChanged (event) {
      this.selectedImage = event.target.files[0]
    },
    createRezept (event) {
      event.preventDefault()
      const fd = new FormData()
      if (this.selectedImage != null) {
        fd.append('image', this.selectedImage, this.selectedImage.name)
      }
      console.log(event)
      fd.append('name', this.name)
      fd.append('ingredient', this.ingredient)
      fd.append('difficulty', this.difficulty)
      fd.append('time', this.time)
    }
  }
}
</script>

<style scoped>
.offcanvas-end {
  width: 550px;
}
.sticky-button {
  border-radius: 50%;
  bottom: 32px;
  height: 48px;
  position: fixed;
  right: 32px;
  width: 48px;
  z-index: 100;
}
</style>

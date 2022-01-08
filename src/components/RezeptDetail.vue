<template>
  <div class="p-3 mb-3 bg-success">
    <div class="container">
      <nav class="nav__breadcrumb text-white" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/rezepte">Rezepte</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ this.getName() }}
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="container">
    <div v-if="this.state === 'loading'">
      Loading ...
    </div>
    <div v-else-if="this.currentRezept">
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <form ref="rezeptForm" class="needs-validation text-start">
            <div class="mb-3">
              <label for="name" class="form-label">Rezeptname*</label>
              <input type="text" class="form-control" id="name" v-model="this.currentRezept.name" required>
            </div>
            <div class="mb-3">
              <label for="ingredient" class="form-label">Zutaten*</label>
              <input type="text" class="form-control" id="ingredient" v-model="this.currentRezept.ingredient" required>
            </div>
            <div class="mb-3">
              <label for="difficulty" class="form-label">Schwierigkeitsgrad*</label>
              <select id="difficulty" class="form-select" v-model="this.currentRezept.difficulty" required>
                <option value="0" :selected="this.currentRezept.difficulty === 0">Leicht</option>
                <option value="1" :selected="this.currentRezept.difficulty === 1">Mittel</option>
                <option value="2" :selected="this.currentRezept.difficulty === 2">Schwer</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="time" class="form-label">Zubereitungsdauer*</label>
              <div class="input-group">
                <input type="number" class="form-control" id="time" v-model="this.currentRezept.time" required>
                <span class="input-group-text">min</span>
              </div>
            </div>
            <div class="mt-5">
              <button class="btn btn-success me-2" @click="this.updateRezept">
                <i class="bi bi-save"></i> Änderungen speichern
              </button>
              <button class="btn btn-danger" @click="this.deleteRezept">
                <i class="bi bi-trash"></i> Löschen
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-5 order-md-1">
          <img v-if="this.currentRezept.imageName != null" :src="getImagePath()" width="400" height="400"
               class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-circle border border-1 border-success">
          <img v-else :src="require('@/assets/placeholder-food-icons.jpg')" width="400" height="400"
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-circle border border-1 border-success">
        </div>
      </div>
    </div>
    <div v-else-if="this.state === 'error'">
      <div class="row d-flex flex-column flex-fill justify-content-center align-items-center">
        <div class="col-8 col-md-5 mb-3">
          <img class="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto rounded-circle border border-1 border-success"
            width="300" height="300" role="img" :src="require('@/assets/empty_rezept_image.png')">
        </div>
        <div class="alert alert-danger">
          <p>
            Rezept mit der ID {{ this.id }} konnte nicht gefunden werden.
          </p>
          <button class="btn btn-outline-danger" @click="this.goBackToRezepte">
            <i class="bi bi-arrow-left"></i> Zurück zu den Rezepten
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RezeptDetail',
  data () {
    return {
      state: 'loading',
      id: null,
      currentRezept: null
    }
  },
  mounted () {
    this.id = this.$route.params.id
    if (this.id) {
      this.$store.dispatch('fetchRezeptById', this.id)
        .then(() => {
          this.currentRezept = this.$store.getters.getRezeptById(this.id)
          this.state = 'success'
        })
        .catch(() => {
          console.log('there is an error')
          this.state = 'error'
        })
    } else {
      this.state = 'error'
    }
  },
  methods: {
    getName () {
      if (this.currentRezept) {
        return this.currentRezept.name
      } else {
        return 'Rezept 404'
      }
    },
    updateRezept (event) {
      event.preventDefault()
      this.$store.dispatch('updateRezept', this.currentRezept)
        .then(() => {
          this.$swal('Rezept erfolgreich aktualisiert', '', 'success')
        })
        .catch((error) => {
          this.$swal('Fehler', 'Rezept konnte nicht aktualisiert werden. Fehler: ' + error, 'error')
        })
    },
    deleteRezept (event) {
      event.preventDefault()
      this.$swal.fire({
        icon: 'question',
        title: 'Löschen',
        text: 'Wollen Sie das Rezept tatsächlich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden.',
        showCancelButton: true,
        confirmButtonText: 'Ja',
        cancelButtonText: 'Nein'
      }).then((res) => {
        console.log(res)
        if (res.isConfirmed) {
          this.$store.dispatch('deleteRezept', this.id)
          this.goBackToRezepte()
        }
      })
    },
    goBackToRezepte () {
      this.$router.push({ name: 'Rezepte' })
    },
    getImagePath () {
      return process.env.VUE_APP_BACKEND_API_URL + '/rezepte/' + this.currentRezept.id + '/image'
    }
  }
}
</script>

<style scoped>
.nav__breadcrumb {
  --bs-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
}

.breadcrumb-item a {
  color: white;
  text-decoration: none;
}

.breadcrumb-item:hover a {
  font-weight: bold;
}

.breadcrumb-item.active {
  color: lightgrey;
}
</style>

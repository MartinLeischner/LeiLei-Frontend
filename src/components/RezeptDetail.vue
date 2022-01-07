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
          <h2 class="featurette-heading">{{ this.currentRezept.name }}</h2>
          <p>
            {{ this.currentRezept.ingredient }}
          </p>
          <p>
            {{ this.currentRezept.difficulty }}
          </p>
          <p>
            {{ this.currentRezept.time }}
          </p>
          <button class="btn btn-success me-2" @click="this.updateRezept">
            <i class="bi bi-save"></i> Änderungen speichern
          </button>
          <button class="btn btn-danger" @click="this.deleteRezept">
            <i class="bi bi-trash"></i> Löschen
          </button>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-circle border border-1 border-success"
            width="300" height="300"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em" dx="-1.75em">300x300</text>
          </svg>
        </div>
      </div>
    </div>
    <div v-else-if="this.state === 'error'">
      <div class="row d-flex flex-column flex-fill justify-content-center align-items-center">
        <div class="col-8 col-md-5 mb-3">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto rounded-circle border border-1 border-success"
            width="300" height="300"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em" dx="-0.75em">😢</text>
          </svg>
        </div>
        <div>
          <p>
            Rezept mit der ID {{ this.id }} konnte nicht gefunden werden.
          </p>
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
    updateRezept: function () {
      console.log('updating ...')
    },
    deleteRezept: function () {
      this.$store.dispatch('deleteRezept', this.id)
      this.$router.push({ name: 'Rezepte' })
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

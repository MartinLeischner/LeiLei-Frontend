<template>
  <div class="rezept__gallery">
    <div class="col col-sm-4" v-for="rezept in this.getRezepte" :key="rezept.id">
      <div class="rezept__card">
        <div class="rezept__badge">
          <img :src=getDifficultyBadge(rezept) alt="Badge">
        </div>
        <div class="card">
          <img v-if="rezept.imageName != null" :src="getImagePath(rezept.id)" class="card-img-top" :alt="rezept.name"
            onerror="this.src='../assets/placeholder-food-icons.jpg'">
          <img v-else :src="require('@/assets/placeholder-food-icons.jpg')" class="card-img-top" :alt="rezept.name">
          <div class="card-body">
            <div class="card-title d-flex justify-content-between">
              <h5>{{ rezept.name }}</h5>
              <div class="card-time"><i class="bi bi-clock"></i> {{ rezept.time }}</div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="card-text text-start mb-3">
              {{ rezept.ingredient }}
            </div>
            <div class="btn-group">
              <button class="btn btn-success btn__goto me-3 card-link" @click="goToRezept(rezept.id)">
                <i class="bi bi-arrow-right"></i> Zum Rezept
              </button>
              <button class="btn btn-danger btn__delete card-link" @click="deleteRezept(rezept.id)">
                <i class="bi bi-trash"></i> Löschen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RezepteCardList',
  data () {
    return {
      rezepte: []
    }
  },
  computed: {
    getRezepte () {
      return this.$store.state.rezepte
    }
  },
  methods: {
    getDifficultyBadge (rezept) {
      if (rezept.difficulty === 0) {
        return require('../assets/leicht.png')
      }
      if (rezept.difficulty === 1) {
        return require('../assets/mittel.png')
      }
      if (rezept.difficulty === 2) {
        return require('../assets/schwer.png')
      }
    },
    getImagePath (id) {
      return process.env.VUE_APP_BACKEND_API_URL + '/rezepte/' + id + '/image'
    },
    goToRezept (id) {
      this.$router.push({ name: 'RezeptDetail', params: { id: id } })
    },
    deleteRezept (id) {
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
          this.$store.dispatch('deleteRezept', id)
          this.goBackToRezepte()
        }
      })
    }
  }
}

</script>

<style scoped>
.rezept__gallery {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}

.rezept__card {
  border-radius: 16px;
  margin: 8px;
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

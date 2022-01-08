<template>
  <div class="about">
    <div class="p-3 mb-3 bg-success text-white">
      <h1 class="m-1">Was ist LeiLei?</h1>
    </div>
    <div class="container">
      <div class="row featurette">
        <div class="col-md-7 d-flex flex-column justify-content-center">
          <h2 class="featurette-heading">Über uns</h2>
          <p class="lead">
            Wir sind zwei Studenten die hier ein Projekt auf die Beine gestellt haben, um das Modul Webtechnologie
            in unserem Studiengang Wirtschaftsinformatik erfolgreich abzuschließen.
          </p>
          <p class="lead">
            Wir hoffen es gefällt euch.
          </p>
        </div>
        <div class="col-md-5">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
               width="500" height="500" :src="require('@/assets/placeholder-food-icons.jpg')">
        </div>
      </div>
      <hr class="featurette-divider m-5">
      <div class="row featurette">
        <div class="col-md-5">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
               width="500" height="500" :src="require('@/assets/placeholder-food-icons.jpg')">
        </div>
        <div class="col-md-7 d-flex flex-column justify-content-center">
          <h2 class="featurette-heading">Zu LeiLei</h2>
          <p class="lead">
            LeiLei ist eine Plattform, um Kochrezepte zu finden.
            Die Rezepte beinhalten wichtige Informationen, wie Zutaten,
            Zubereitungszeit und Schwierigkeitsgrad.
          </p>
          <p class="lead">
            Viele Rezepte werden nach und nach hinzugefügt, sodass ein Wiederkommen lohnt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>

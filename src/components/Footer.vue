<template>
  <div class="footer">
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-6 mb-0 text-start text-muted">© 2021 LeiLei</p>

        <ul class="nav col-md-6 justify-content-end">
          <router-link class="nav-link px-2 text-muted" to="/">Home</router-link>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Impressum</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">AGB</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Datenschutz</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: white;
  width: 100vw;
}
</style>

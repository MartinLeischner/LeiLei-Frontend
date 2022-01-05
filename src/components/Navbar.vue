<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
      <div class="d-flex align-items-center col-md-4 mb-3 mb-md-0">
        <img class="navbar-logo bi me-2" src="../assets/logo.png" alt="Logo">
        <router-link class="navbar-brand" to="/">LeiLei</router-link>
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">Über uns</router-link>
          <router-link class="nav-link" to="/rezepte">Rezepte</router-link>
        </ul>
      </div>

      <div class="d-flex justify-content-md-end justify-content-between col-12 col-md-4 text-end">
        <form class="col-9 col-lg-auto me-lg-3">
          <input type="search" class="form-control" placeholder="Suche..." aria-label="Search">
        </form>
        <div class="navbar-profile col-3 btn-group dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle"
             id="dropdownUser" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../assets/avatar.png" alt="profile avatar" width="32" height="32" class="rounded-circle">
          </a>
          <div class="dropdown-menu text-small" aria-labelledby="dropdownUser">
            <a class="dropdown-item" href="#">Meine Rezepte</a>
            <a class="dropdown-item" href="#">Einstellungen</a>
            <a class="dropdown-item" href="#">Mein Profil</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Abmelden</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-logo {
  height: 40px;
  width: 40px;
}

.navbar-brand {
  font-size: 1.7em;
  font-weight: bold;
}

.navbar-profile {
  width: 50px;
}

.navbar-profile .dropdown-menu {
  left: -110px;
}

.nav-link {
  text-decoration: none;
}

.nav-link.active {
  color: var(--bs-success) !important;
  font-weight: bold;
}
</style>

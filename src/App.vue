<template>
  <Navbar></Navbar>
  <main class="flex-grow-1">
    <router-view/>
  </main>
  <RezepteCreation></RezepteCreation>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar'
import RezepteCreation from '@/components/RezepteCreation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    RezepteCreation,
    Footer
  }
}

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

<template>
  <div class="p-3 mb-2 bg-success text-white">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button">Zu den Rezepten</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

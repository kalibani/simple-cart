<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from '@/pages/AppNavbar'
export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* margin-top: 60px; */
}
</style>

<template>
  <div id="app main">
    <h3>vue-mfe</h3>
    <img :src="logo" alt="">
    <router-view></router-view>
  </div>
</template>

<script>
import logo from './assets/logo.png'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      logo
    }
  }
}
</script>

<style>
#app.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

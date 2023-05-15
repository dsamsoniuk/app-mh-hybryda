<template>
  <div id="app" class="container-fluid mt-2">
    <div class="row">
      <div class="col-sm-2">

          <b-nav vertical justified type="dark" class="dark">
            <b-nav-item active>APP MH-Hybryda</b-nav-item>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item><router-link to="/devices">Urządzenia</router-link></b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
          <FetchDataButton />
      </div>
      <div class="col-sm-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import FetchDataButton from '@/components/FetchDataButton.vue'
export default {
  name: 'AppView',
  components: {
    FetchDataButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

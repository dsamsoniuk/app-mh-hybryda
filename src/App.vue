<template>
  <div id="app" class="h-100">

    <b-navbar toggleable="lg" type="dark" variant="primary" class="p-2">
      <b-navbar-brand href="#"># MH</b-navbar-brand>
    </b-navbar>

    <div class="row h-100 m-0">

        <nav class="col-3 d-md-block bg-light sidebar text-start border-end">
          <div class="position-sticky pt-3">

          <b-nav vertical justified>
            <b-nav-item active>Panel</b-nav-item>
            <!-- <li class="nav-item">
              <router-link to="/" class="nav-link" target="_self" aria-current="page">Home</router-link>
            </li> -->
       
            <b-nav-item :to="{name: 'home'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Home
            </b-nav-item>
            <b-nav-item  :to="{name: 'about'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              About
            </b-nav-item>
            <b-nav-item :to="{name: 'devices'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Urządzenia
            </b-nav-item>
            <b-nav-item><FetchDataButton table-name="device"/></b-nav-item>
          </b-nav>
        </div>

        </nav>

      <div class="col-9 pt-4"> 
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

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
nav a.router-link-exact-active, nav a.router-link-exact-active.nav-link {
  color: #42b983;
}

 button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    margin-left: auto;
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}
</style>

<template>
  <div id="app" class="h-100">

    <b-navbar toggleable="lg" type="dark" variant="primary" class="p-2">
      <b-navbar-brand href="#"># MH</b-navbar-brand>
      <CheckOnlineSwitch />
    </b-navbar>

    <div class="row h-100 m-0">
      <div class="col-3 d-md-block bg-light text-start border-end"> 
        <SidebarLeftMenu />
      </div>

      <div class="col-9 pt-4"> 
        <router-view/> 
      </div>
    </div>

  </div>
</template>

<script>
import CheckOnlineSwitch from '@/components/CheckOnlineSwitch.vue'
import SidebarLeftMenu from '@/components/SidebarLeftMenu.vue'

export default {
  name: 'AppView',

  components: {
     CheckOnlineSwitch, SidebarLeftMenu
  },
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


<template>
    <div class="fetch-data d-inline m-1">
      <nav class="sidebar">
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
          </b-nav>
          <div class="m-4">
            <label for="">Url dla platformy</label>
            <b-form-input
            id="input-1"
            v-model="urlapi"
            type="text"
            placeholder="url np. http://localhost:8000 lub http://domena.pl"
            required
            :value="urlapi"
          ></b-form-input>
          <b-button variant="secondary" class="mt-2" @click="saveUrlPlatform">Zapisz url</b-button>

          </div>

        </div>

        </nav>
    </div>
</template>

  <script>

  export default {
    name: 'SidebarLeftMenu',
    data(){
      return {
        urlapi: 'http://localhost:8000/index.php/appDesktop',
      }
    },
    methods: {
      saveUrlPlatform(){
        localStorage.url_api_platform = this.urlapi
        this.$bvToast.toast('Zapisano', {
          title: `Informacja`,
          variant: 'success',
        });
      }
    }
  }
  </script>
  
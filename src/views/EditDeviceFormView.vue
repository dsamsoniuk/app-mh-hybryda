<template>
    <div class="editDeviceForm">
      <router-link :to="{name: 'devices'}" class="btn btn-primary float-start">powrót</router-link>

      <h2>Edycja urządzenia</h2>
      <hr>
       <div class="col-sm-6">

    <b-form @submit="onSubmit" v-if="show" class="text-start">
      <b-form-group
        id="input-group-1"
        label="Nazwa urządzenia:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Nazwa urządzenia"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Model urządzenia"
        label-for="input-1"
      >
        <b-form-input
          id="input-2"
          v-model="form.model"
          type="text"
          placeholder="Model urządzenia"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Notatka:"
        label-for="input-1"
      >
        <b-form-input
          id="input-3"
          v-model="form.note"
          type="text"
          placeholder="Notatka"
          required
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="success" class="mt-2">Zapisz</b-button>
    </b-form>

       </div>

    </div>
  </template>
  
  <script>
import DeviceModel from '@/models/DeviceModel'

  // @ is an alias to /src
  export default {
    name: 'EditDeviceFormView',
    data(){
      return {
        id: 0,
        form: {
          name: '',
          model: '',
          note: '',
        },
        show: true,
      }
    },
    mounted(){
      this.id       = this.$route.params.id
      let devModel  = new DeviceModel()
      this.form     = devModel.find(this.id).simplifyData()
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()

        let formData = JSON.parse(JSON.stringify(this.form))
        let devModel = new DeviceModel()

        devModel.load(formData).save()

        this.$bvToast.toast('Zapisano zmiany', {
          title: `Informacja`,
          variant: 'success',
          autoHideDelay: 5000,
        })
        let routeLink = this.$router.resolve({ name: 'devices'})
        location.href = routeLink.href;
      }
    }
  }
  </script>
<style>
/** bez tego toast szybko znika*/
.toast:not(.show) {
    display: block;
 }
</style>

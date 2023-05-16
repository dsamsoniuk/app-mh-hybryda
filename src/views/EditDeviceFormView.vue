<template>
    <div class="editDeviceForm">
        <h2>Formularz urzadzenia</h2>
       id: {{ id }};;;

       <div class="row">

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nazwa urzadzenia:"
        label-for="input-1"
        description="pole wymagane"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Nazwa urzadzenia"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Model urzadzenia"
        label-for="input-1"
        description="pole wymagane"
      >
        <b-form-input
          id="input-2"
          v-model="form.model"
          type="text"
          placeholder="Model urzadzenia"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Notatka:"
        label-for="input-1"
        description="pole wymagane"
      >
        <b-form-input
          id="input-3"
          v-model="form.note"
          type="text"
          placeholder="Notatka"
          required
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="success">Zapisz</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
        show: true
      }
    },
    mounted(){
      this.id = this.$route.params.id
      let devModel = new DeviceModel()
      this.form = devModel.find(this.id)
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

      },
      onReset(event) {
        event.preventDefault()
        let devModel = new DeviceModel()

        this.form = devModel.find()
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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

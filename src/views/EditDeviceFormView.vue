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
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.model = ''
        this.form.name = ''
        this.form.note = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
  </script>
  
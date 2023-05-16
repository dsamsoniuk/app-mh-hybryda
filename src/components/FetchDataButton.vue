
<template>
    <div class="fetch-data">
      <b-button variant="success" @click="fetchAllData">Pobierz dane</b-button>
    </div>
</template>

  <script>
  import axios from 'axios';
  import DBHelper from '../helpers/DBHelper'

  export default {
    name: 'FetchDataButton',
    data(){
      return {
        dBHelper: new DBHelper()
      }
    },
    methods: {
      async fetchAllData(){
          console.log('pobieram')
          try {
            let res =  await axios.get('http://localhost:8001');
            this.dBHelper.setItemToString('device', res.data)
          } catch(err) {
            console.log(err)
            // TODO: chwilowe w ramach testow
            this.dBHelper.setItemToString('device', [
              {id:0, name:'brak wynikow', model:'test', note:'notka'}
            ])

          }
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  
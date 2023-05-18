
<template>
    <div class="fetch-data d-inline m-1">
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
    props: {
      tableName: String
    },
    methods: {
      async fetchAllData(){
          try {
            // let url = process.env.VUE_APP_URL_TEST + '/device/get-device-list'
            let url = localStorage.url_api_platform + '/device/get-device-list'
            let res =  await axios.get(url);
            this.dBHelper.setDataByTable(this.tableName, res.data)

            this.$bvToast.toast('Pobrano dane', {
              title: `Informacja`,
              variant: 'success',
            })

            this.$parent.reloadTable();
          } catch(err) {
            console.log(err)

            this.$bvToast.toast('Problem z połączeniem', {
              title: `Informacja`,
              variant: 'danger',
            })
          }
      }
    }
  }
  </script>
  
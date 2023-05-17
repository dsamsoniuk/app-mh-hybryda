
<template>
    <div class="fetch-data d-inline m-1">
      <b-button variant="warning" @click="sendAllData">Synchronizuj dane</b-button>
    </div>
</template>

  <script>
  import axios from 'axios';
  import DBHelper from '../helpers/DBHelper'

  export default {
    name: 'SynchroDataButton',
    data(){
      return {
        dBHelper: new DBHelper()
      }
    },
    props: {
      tableName: String
    },
    methods: {
      async sendAllData(){
          try {
            let url     = process.env.VUE_APP_URL_TEST
            let records = this.dBHelper.getDataByTable(this.tableName)

            for (let i in records) {
              if (records[i].flagModifed == true) {
                await axios.put(url + '/put.php', records[i]);               
              }
            }
            
            this.$bvToast.toast('Synchronizacja zakonczona', {
              title: `Informacja`,
              variant: 'success',
              autoHideDelay: 5000,
            })
          } catch(err) {
            console.log(err)
            
            this.$bvToast.toast('Problem z połączeniem', {
              title: `Informacja`,
              variant: 'danger',
              autoHideDelay: 5000,
            })
          }
      }
    }
  }
  </script>
  
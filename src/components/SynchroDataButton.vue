
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
            let url     = process.env.VUE_APP_URL_TEST + '/device/synchro-devices'
            let records = this.dBHelper.getDataByTable(this.tableName)

            for (let i in records) {
              if (records[i].flagModifed == true) {
                // await axios.post(url, records[i]);               
                //await axios.post(url, {data:{a:232}});   
                console.log(records[i], {id:222}) 
                await axios.request({
                  method: 'POST',
                   headers: {
                      'Content-Type' : 'application/json; charset=UTF-8',
                    },
                  url: url,
                  data: {
                    next_swastik: 'lets add something here',
                    id: 77,
                    aa: 1
                  },

                })           
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
  
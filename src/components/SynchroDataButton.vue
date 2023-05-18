
<template>
    <div class="fetch-data d-inline m-1">
      <b-button variant="warning" @click="sendAllData">Synchronizuj dane</b-button>
    </div>
</template>

  <script>

  //import axios from 'axios';
  import DBHelper from '../helpers/DBHelper';
  import $ from 'jquery';

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
      sendAllData(){
          try {
            // let url             = process.env.VUE_APP_URL_TEST + '/device/synchro-devices'
            let url             = localStorage.url_api_platform + '/device/synchro-devices'
            let records         = this.dBHelper.getDataByTable(this.tableName)
            var reloadedRecords = []
            var failRequest = false;
            for (let i in records) {
              if (records[i].flagModifed == true) {

                $.ajax({url:url, method:'POST', data: records[i], async: false})
                  .done(function(data, textStatus){
                    if (textStatus == 'success') {
                      records[i].flagModifed  = false;
                      records[i].flagNew      = false;
                      records[i].flagDeleted  = false;
                    }
                    reloadedRecords.push(records[i])
                  })
                  .fail(function(){
                    failRequest = true
                    reloadedRecords.push(records[i])
                  });

              } else {
                reloadedRecords.push(records[i])
              }
            }
            this.dBHelper.setDataByTable(this.tableName, reloadedRecords);
            if (failRequest) {
              this.$bvToast.toast('Synchronizacja nie powiodła się', {
                title: `Informacja`,
                variant: 'danger',
              });
            } else {
              this.$bvToast.toast('Synchronizacja zakonczona', {
              title: `Informacja`,
              variant: 'success',
            });
            }
            this.$parent.reloadTable();
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
  
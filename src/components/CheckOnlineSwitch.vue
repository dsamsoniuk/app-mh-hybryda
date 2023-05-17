
<template>
    <div class="fetch-data d-inline m-1">
      <span class="badge bg-success" v-if="isOnline" >Online</span>
      <span class="badge bg-danger" v-else >Offline</span>
    </div>
</template>

  <script>
  import axios from 'axios';

  export default {
    name: 'CheckOnlineSwitch',
    data(){
      return {
        isOnline: false,
        req: ''
      }
    },
    props: {
      tableName: String
    },
    mounted(){
      setInterval(this.checkOnline, 20000);
    },
    methods: {
      async checkOnline(){
          try {
            let url = process.env.VUE_APP_URL_TEST
            var res = await axios.get(url);
            this.req = res
            this.isOnline = true
          } catch(err) {
            this.isOnline = false
          }
      }
    }
  }
  </script>
  
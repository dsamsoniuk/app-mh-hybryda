
<template>
    <div class="fetch-data">
      <b-button variant="success" @click="fetchAllData">Pobierz dane</b-button>
    </div>
</template>

  <script>
  import axios from 'axios';

  export default {
    name: 'FetchDataButton',
    methods: {
      async fetchAllData(){
          console.log('pobieram')
          try {
            let res =  await axios.get('https://cat-fact.herokuapp.com/facts/random?amount=5');
            this.localStoreHelper.setItemToString('animals', res.data)
          } catch(err) {
            console.log(err)
          }
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  
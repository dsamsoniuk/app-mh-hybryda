<template>
  <div class="hello2">
    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="{ item }">
        <span>
          <router-link :to="{name: 'deviceedit', params:{ id: item._id }}" class="btn btn-success">Edycja</router-link>
        </span>
      </template>
    </b-table>

  </div>
</template>

<script>
import LocalStoreHelper from '../helpers/LocalStoreHelper'

export default {
  name: 'DeviceList',
  data() {
    return {
      localStoreHelper: new LocalStoreHelper(),
      items: [],
      fields: [
        '_id',
        'status',
        'createdAt',
        'actions'
      ]
    }
  },
  props: { },
  mounted(){
    this.items = this.localStoreHelper.getItemFromString('animals')
  },
  methods: {
    editItem(item) { console.log(item); }
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

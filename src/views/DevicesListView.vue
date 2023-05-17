<template>
  <div class="devices">
    <h2>Lista urządzeń</h2>
    <hr>
    <div class="float-start">
      <FetchDataButton table-name="device"/>
      <SynchroDataButton table-name="device"/>
    </div>
    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="{ item }">
        <span>
          <router-link :to="{name: 'deviceedit', params:{ id: item.id }}" class="btn btn-success">Edycja</router-link>
        </span>
      </template>
    </b-table>
  </div>
</template>
<script>
// @ is an alias to /src
import FetchDataButton from '@/components/FetchDataButton.vue';
import SynchroDataButton from '@/components/SynchroDataButton.vue';
import DBHelper from '@/helpers/DBHelper';
import DeviceModel from '@/models/DeviceModel';

export default {
  name: 'DevicesListView',
  components: {
      FetchDataButton, SynchroDataButton
  },
  data() {
    return {
        dBHelper: new DBHelper(),
        items: [],
        fields: [
            "id",
            "name",
            "model",
            "note",
            "actions"
        ]
    };
  },
  mounted() {
      let devModel = new DeviceModel()
      this.items = devModel.findAll()
  },
  methods: {
      editItem(item) { console.log(item); }
  },
}
</script>

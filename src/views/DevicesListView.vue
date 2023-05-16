<template>
  <div class="devices">
    <h2>Lista urzadzen</h2>
    <hr>
    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="{ item }">
        <span>
          <router-link :to="{name: 'deviceedit', params:{ id: item.id }}" class="btn btn-success">Edycja</router-link>
        </span>
      </template>
    </b-table>
     <FetchDataButton />
       Synchronizacja

  </div>
</template>
<script>
// @ is an alias to /src
import FetchDataButton from '@/components/FetchDataButton.vue';
import DBHelper from '@/helpers/DBHelper';
import DeviceModel from '@/models/DeviceModel';

export default {
  name: 'DevicesListView',
  components: {
      FetchDataButton
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
      // this.items = this.dBHelper.getItemFromString("devices");

      let devModel = new DeviceModel()
      console.log(devModel.simplifyData())
      this.items = devModel.findAll()
      // let res2 = dev.findAll();
      

      // console.log(res)
      // res.name = 'ojojoj'
      // res.save()
      // let nowy = dev.find(1)
      // console.log(nowy)

  },
  methods: {
      editItem(item) { console.log(item); }
  },
}
</script>

<template>
  <div class="devices">
    <h2>Lista urządzeń</h2>
    <hr>
    <div class="float-end d-block">
      <FetchDataButton table-name="device"/>
      <SynchroDataButton table-name="device"/>
    </div>
    <div class="container-fluid">
      <br>
      <router-link :to="{name: 'deviceedit', params:{ id: 0 }}" class="btn btn-success float-start me-3">Dodaj nowy</router-link>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <b-table striped hover :items="items" :fields="fields" :per-page="perPage"
      responsive="sm"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :current-page="currentPage" :tbody-tr-class="rowClass"  
      label-sort-asc=""
      label-sort-desc=""
      label-sort-clear="">
      <template v-slot:cell(actions)="{ item }">
        <span>
          <router-link :to="{name: 'deviceedit', params:{ id: item.id }}" class="btn btn-success">Edycja</router-link>
          <button @click="deleteModel(item.id)" class="btn btn-danger ms-1">Usuń</button>
        </span>
      </template>
    </b-table>

  </div>

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
        sortBy: 'id',
        sortDesc: false,
        perPage: 15,
        currentPage: 1,
        fields: [ // TODO: zamienic na ladowanie podstawowych atrybutow
            { key: "id", sortable: true },
            { key: "name", sortable: true },
            { key: "model", sortable: true },
            { key: "note", sortable: true },
            "actions"
        ]
    };
  },
  mounted() {
      this.items    = (new DeviceModel()).findAll()
  },
  methods: {
    rowClass(item, type) {
      if (item.flagDeleted === true && type === 'row') {
        return 'bg-danger'
      } else if (item.flagModifed === true && type === 'row') {
        return 'bg-info'
      } 
      return null
    },
    deleteModel(deviceId) { 
      let devModel  = new DeviceModel()
      let rr        = devModel.find(deviceId)
      rr.delete()
      this.items    = (new DeviceModel()).findAll()
    },
    reloadTable(){
      this.items    = (new DeviceModel()).findAll()
    }
  },
  computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>

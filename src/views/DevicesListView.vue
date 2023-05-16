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
import LocalStoreHelper from '@/helpers/LocalStoreHelper';

export default {
  name: 'DevicesListView',
  components: {
      FetchDataButton
  },
  data() {
        return {
            localStoreHelper: new LocalStoreHelper(),
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
      this.items = this.localStoreHelper.getItemFromString("devices");
  },
  methods: {
      editItem(item) { console.log(item); }
  },
}
</script>

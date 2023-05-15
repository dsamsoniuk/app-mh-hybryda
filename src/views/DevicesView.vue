<template>
  <div class="devices">
    <h2>Lista urzadzen</h2>
    <hr>
    <DeviceList />

  </div>
</template>
<script>
// @ is an alias to /src
import DeviceList from '@/components/DeviceList.vue'

export default {
  name: 'HomeView',
  components: {
    DeviceList
  }
}
</script>

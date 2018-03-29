<template>
  <b-table v-if="events.length" striped hover bordered :items="events"></b-table>
  <div v-else class="bg-secondary p-3">
    <h4 class="text-warning">No data.</h4>
  </div>
</template>

<script>
import bTable from 'bootstrap-vue/es/components/table/table';

export default {
  props: {
    events: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    'b-table': bTable,
  },
};
</script>

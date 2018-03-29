<template>
  <div>
    <h3>Events</h3>
    <div class="p-3">
      <events-list :events="events"></events-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from './_store';
import * as commandTypes from './types';
import EventList from './_components/EventList';

export default {
  name: 'Events',
  components: {
    'events-list': EventList,
  },
  computed: {
    ...mapGetters({
      events: '$_events/events',
    }),
  },
  created() {
    this.$store.registerModule('$_events', store);
  },
  mounted() {
    this.$store.dispatch(`$_events/${commandTypes.FETCH_EVENTS}`);
  },
};
</script>

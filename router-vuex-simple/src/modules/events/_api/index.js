import axios from 'axios';

const fetchEvents = () => axios.get('/static/mocks/events/events.json')
  .then(response => response.data);

export default {
  fetchEvents,
};

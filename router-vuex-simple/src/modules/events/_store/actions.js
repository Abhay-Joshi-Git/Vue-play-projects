import * as commandTypes from '../types';
import api from '../_api/index';

const FETCH_EVENTS = (context) => {
  api.fetchEvents().then((data) => {
    context.commit(commandTypes.ADD_EVENTS, data);
  });
};

export default {
  [commandTypes.FETCH_EVENTS]: FETCH_EVENTS,
};

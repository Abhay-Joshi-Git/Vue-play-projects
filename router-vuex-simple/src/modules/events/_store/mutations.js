import * as commandTypes from '../types';

const addEvents = (state, events) => {
  state.events = events;
};

export default {
  [commandTypes.ADD_EVENTS]: addEvents,
};

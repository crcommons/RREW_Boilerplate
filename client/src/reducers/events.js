const eventsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'CREATE EVENT':
      return Object.assign({}, state, { [payload.event_id]: payload.event });
    case 'UPDATE EVENT':
      return Object.assign({}, state, { [payload.event_id]: payload.event });
    case 'DELETE EVENT':
      const newState = Object.assign({}, state);
      delete Object.assign({}, state)[payload.event_id];
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;

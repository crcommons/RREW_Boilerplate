const parkingsReducer = (state = { lot1: 'closed', lot2: 'closed', lot3: 'closed' }, { type, payload }) => {
  switch (type) {
    case 'CLOSE ALL LOTS':
      return Object.assign({}, state, { lot1: 'closed', lot2: 'closed', lot3: 'closed' });
    case 'OPEN ALL LOTS':
      return Object.assign({}, state, { lot1: 'open', lot2: 'open', lot3: 'open' });
    case 'UPDATE LOT STATUS':
      return Object.assign({}, state, { [payload.lotName]: payload.status });
    default:
      return state;
  }
};

export default parkingsReducer;

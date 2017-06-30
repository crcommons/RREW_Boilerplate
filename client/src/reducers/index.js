import { combineReducers } from 'redux';
import eventsReducer from './events';
import parkingReducer from './parking';

export default combineReducers({
  eventsReducer,
  parkingReducer,
});

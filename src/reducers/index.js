import { combineReducers } from 'redux';
import characters from './characterReducer';
import characterDetails from './characterDetailReducer';

export default combineReducers({
  characters,
  characterDetails
});

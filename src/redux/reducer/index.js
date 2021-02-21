import {mealReducer} from './mealReducer';
import {cartReducer} from './cartReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  mealReducer,
  cartReducer,
});

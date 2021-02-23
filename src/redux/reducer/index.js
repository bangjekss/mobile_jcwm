import {mealReducer} from './mealReducer';
import {cartReducer} from './cartReducer';
import {authReducer} from './authReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  mealReducer,
  cartReducer,
  authReducer,
});

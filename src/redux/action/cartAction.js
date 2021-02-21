import {ADD_TO_CART, API_LOADING_START} from '../type';

export const addToCartAction = (payload) => {
  return (dispatch) => {
    // dispatch({type: API_LOADING_START})
    dispatch({type: ADD_TO_CART, payload});
  };
};

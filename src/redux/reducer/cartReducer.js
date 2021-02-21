import {
  API_LOADING_START,
  API_LOADING_SUCCESS,
  API_LOADING_FAILED,
  ADD_TO_CART,
} from '../type';

const INITIAL_STATE = {
  cart: [],
  isLoading: false,
  error: false,
  errorMessage: null,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case API_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case API_LOADING_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

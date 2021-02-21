import {
  API_LOADING_FAILED,
  API_LOADING_START,
  API_LOADING_SUCCESS,
} from '../type';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: false,
  errorMessage: null,
};

const mealReducer = (state = INITIAL_STATE, action) => {
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
        isLoading: true,
        error: true,
        errorMessage: action.payload,
      };
    case 'GET_MEAL':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export {mealReducer};

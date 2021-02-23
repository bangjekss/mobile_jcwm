import {AUTH_LOGOUT, AUTH_SIGN_IN_UP} from '../type';

const INITIAL_STATE = {
  isSignIn: false,
  isLoading: false,
  error: false,
  errorMessage: false,
  username: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN_UP:
      return {
        ...state,
        username: action.payload,
        isSignIn: true,
      };
    case AUTH_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

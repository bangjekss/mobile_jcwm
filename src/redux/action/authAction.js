import {AUTH_LOGOUT, AUTH_SIGN_IN_UP} from '../type';

export const signAction = (payload) => {
  return {
    type: AUTH_SIGN_IN_UP,
    payload,
  };
};

export const logoutAction = (payload) => {
  return {
    type: AUTH_LOGOUT,
  };
};

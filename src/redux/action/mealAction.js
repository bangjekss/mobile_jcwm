import axios from 'axios';
import {
  API_LOADING_FAILED,
  API_LOADING_START,
  API_LOADING_SUCCESS,
} from '../type';

const ZOMATO_KEY = 'd861aa7739d802403899213bb7c5a3ce';
const ZOMATO_URL = 'https://developers.zomato.com/api/v2.1';

const apiHeader = {
  headers: {
    'user-key': ZOMATO_KEY,
  },
};

export const getMealAction = () => {
  return async (dispatch) => {
    dispatch({type: API_LOADING_START});
    try {
      const response = await axios.get(
        `${ZOMATO_URL}/collections?city_id=1&count=10`,
        apiHeader,
      );
      dispatch({
        type: 'GET_MEAL',
        payload: response.data.collections,
      });
      dispatch({type: API_LOADING_SUCCESS});
    } catch (err) {
      console.log(err);
      dispatch({
        type: API_LOADING_FAILED,
        payload: err.message,
      });
    }
  };
};

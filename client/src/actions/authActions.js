import axios from 'axios';
import { FETCH_USER, SIGNUP_SUCCESS, SIGNUP_FAIL } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
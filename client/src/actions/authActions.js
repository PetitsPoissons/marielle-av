import axios from 'axios';
import { FETCH_USER, SIGNUP_SUCCESS, SIGNUP_FAIL, AUTH_ERROR } from './types';

// Fetch current user
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// Sign up new user
export const signUp = (signUpData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(signUpData);
  console.log('body', body);
  try {
    const res = await axios.post('/api/auth/signup', body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(fetchUser());
  } catch (err) {
    console.log(err);
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

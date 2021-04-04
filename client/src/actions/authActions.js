import axios from 'axios';
import { FETCH_USER, SIGNUP_SUCCESS, AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

// Fetch current user
export const fetchUser = () => async (dispatch) => {
  // check localStorage for a token and set the global headers with it if there is one
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Server error',
    });
  }
};

// Sign up new user with email/password
export const signUp = (signUpData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/auth/signup', signUpData, config);
    console.log(res.data);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data.token, // we get the token back
    });
    localStorage.setItem('token', res.data.token); // store token into local storage
    dispatch(fetchUser());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email is already in use',
    });
  }
};

// Sign up new user with Facebook
export const oauthFacebook = (facebookToken) => async (dispatch) => {
  console.log('oauthFacebook token', facebookToken);
  const res = await axios.post('/api/auth/facebook', {
    access_token: facebookToken,
  });
  console.log('res', res);
  dispatch({
    type: SIGNUP_SUCCESS,
    payload: res.data.token, // we get the token back
  });
  localStorage.setItem('token', res.data.token); // store token into local storage
  dispatch(fetchUser());
};

// Sign up new user with Google
export const oauthGoogle = (googleToken) => async (dispatch) => {
  console.log('oauthGoogle token', googleToken);
  const res = await axios.post('/api/auth/google', {
    access_token: googleToken,
  });
  console.log('res', res);
  dispatch({
    type: SIGNUP_SUCCESS,
    payload: res.data.token, // we get the token back
  });
  localStorage.setItem('token', res.data.token); // store token into local storage
  dispatch(fetchUser());
};

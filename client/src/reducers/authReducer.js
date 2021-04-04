import { FETCH_USER, SIGNUP_SUCCESS, AUTH_ERROR } from '../actions/types';

const initialState = {
  token: '',
  loading: true,
  isAuthenticated: null,
  currentUser: null,
  errorMessage: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: payload ? true : false,
        currentUser: payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
        isAuthenticated: true,
        errorMessage: '',
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
}

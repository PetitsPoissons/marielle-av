import { FETCH_USER, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/types';

const initialState = {
  token: '',
  loading: true,
  isAuthenticated: null,
  currentUser: null,
  errorMessage: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: payload ? true : false,
        currentUser: payload,
      };
    case SIGNUP_SUCCESS:
      return {};
    case SIGNUP_FAIL:
      return {};
    default:
      return state;
  }
}

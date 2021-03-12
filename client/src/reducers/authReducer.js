import { FETCH_USER } from '../actions/types';

const initialState = {
  isAuthenticated: null,
  currentUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

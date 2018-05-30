// import isEmpty from 'lodash/isEmpty';
import { ADD_USER, SET_USER, REMOVE_USER } from '../actions';

const initialState = {
  isAuthenticated: false,
  user: {
    firstName: '',
    lastName: '',
    email: ''
  }
};

export default (state = initialState, action = {}) => {
  let newState;
  let isAuthenticated;
  switch (action.type) {
    case ADD_USER:
      return action.payload;

    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };

    case REMOVE_USER:
      return {
        ...state,
        isAuthenticated: false,
        redirect: true,
        user: action.payload
      };

    default:
      return state;
  }
};

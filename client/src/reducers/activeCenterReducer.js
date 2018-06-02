import {
  FETCH_CENTER_DETAIL,
  EDIT_CENTER_REQUEST,
  EDIT_CENTER,
  REMOVE_CENTER,
  EVENT_STATUS_CHANGE,
  NOT_FOUND
} from '../actions';

export default (state = {}, action = {}) => {
  let newState;
  switch (action.type) {
    case FETCH_CENTER_DETAIL:
      return action.center;

    case EDIT_CENTER_REQUEST:
      return {
        ...state,
        editCenter: true
      };

    case EDIT_CENTER:
      newState = {
        ...state,
        editCenter: false,
        centr: action.payload
      };
      return newState;

    case REMOVE_CENTER:
      newState = { ...state };
      delete { ...newState };
      return {};

    case EVENT_STATUS_CHANGE:
      newState = {
        ...state,
        eventStatusChange: true
      };
      return newState;

    case NOT_FOUND:
      return { ...state, centerNotFound: true };

    default:
      return state;
  }
};


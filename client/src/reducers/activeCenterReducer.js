import {
  FETCH_CENTER_DETAIL,
  EDIT_CENTER_REQUEST,
  EDIT_CENTER,
  REMOVE_CENTER,
  EVENT_STATUS_CHANGE
} from "../actions";

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
      newState = Object.assign({}, state);
      newState.editCenter = false;
      newState.centr = action.payload;
      return newState;

    case REMOVE_CENTER:
      newState = Object.assign({}, state);
      delete { ...newState };
      return {};

    case EVENT_STATUS_CHANGE:
      newState = Object.assign({}, state);
      newState.eventStatusChange = true;
      return newState;

    default:
      return state;
  }
};

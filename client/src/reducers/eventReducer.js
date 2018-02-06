import { ADD_EVENT, EDIT_EVENT, EDIT_EVENT_REQUEST, FETCH_EVENTS, REMOVE_EVENT } from '../actions';

const pageLimit = 10;
let newState;

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;

    case ADD_EVENT:
      if (state.events) {
        state.events.push(action.payload);
        state.totalCount = state.events.length;
        state.pageCount = Math.ceil(state.totalCount / pageLimit);
        return state;
      }
      state.events = [];
      state.events.push(action.payload);
      state.totalCount = state.events.length;
      state.pageCount = Math.ceil(state.totalCount / pageLimit);
      return state;

    case EDIT_EVENT_REQUEST:
      return {
        ...state,
        eventToEdit: action.payload,
        editEvent: true
      };

    case EDIT_EVENT:
      newState = Object.assign({}, state);
      for (let i = 0; i < newState.events.length; i + 1) {
        if (newState.events[i].id === action.payload.id) {
          newState.events.splice(i, 1, action.payload);
        }
      }
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    case REMOVE_EVENT:
      newState = Object.assign({}, state);
      for (let i = 0; i < newState.events.length; i + 1) {
        if (newState.events[i].id === action.payload.id) {
          newState.events.splice(i, 1);
        }
      }
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    default:
      return state;
  }
};

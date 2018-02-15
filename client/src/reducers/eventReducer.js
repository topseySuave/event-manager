import {
  ADD_EVENT,
  EDIT_EVENT,
  EDIT_EVENT_REQUEST,
  FETCH_EVENTS,
  REMOVE_EVENT,
  LOADMORE_REQUEST,
  LOADMORE_SUCCESS,
  LOADMORE_FAILURE
} from '../actions';

const pageLimit = 10;
let newState;

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;

    case ADD_EVENT:
      if (state.events) {
        state.events.unshift(action.payload);
        state.totalCount = state.events.length;
        state.pageCount = Math.ceil(state.totalCount / pageLimit);
        return state;
      }
      state.events = [];
      state.events.unshift(action.payload);
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
      newState.events.map((event, index) => {
        if (event.id === action.payload.id) {
          newState.events[index] = action.payload;
        }
      });
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    case REMOVE_EVENT:
      newState = Object.assign({}, state);
      newState.events.map((event, index) => {
        if (event.id === action.payload.id) {
          delete newState.events[index];
        }
      });
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    case LOADMORE_FAILURE:
      return { ...state, loadingmore: false };

    case LOADMORE_REQUEST:
      return { ...state, loadmore: true, loadingmore: true };

    case LOADMORE_SUCCESS:
      newState = Object.assign({}, state);
      newState.events = newState.events.concat(action.payload);
      newState.loadingmore = false;
      newState.page = parseInt(newState.page + 1, 10);
      newState.pageSize = parseInt(newState.pageSize + action.payload.length, 10);
      if(newState.pageSize === newState.totalCount){
          newState.loadmore = false;
      }
      return newState;

    default:
      return state;
  }
};

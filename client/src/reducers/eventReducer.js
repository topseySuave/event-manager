import isEmpty from 'lodash/isEmpty';
import {
  ADD_EVENT,
  EDIT_EVENT,
  EDIT_EVENT_REQUEST,
  EDIT_EVENT_FAILURE,
  FETCH_EVENTS,
  REMOVE_EVENT,
  LOADMORE_EVENT_REQUEST,
  LOADMORE_EVENT_SUCCESS,
  LOADMORE_EVENT_FAILURE,
  SEARCH_EVENT_TITLE,
  SEARCH_EVENT_TITLE_FAILED,
  SESSION_EVENTS,
  SESSION_EVENTS_FAILURE,
  ADD_EVENT_FAILURE
} from '../actions';

const pageLimit = process.env.DATA_LIMIT;
let newState;

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;

    case ADD_EVENT:
      newState = Object.assign({}, state);
      if (newState.events) {
        newState.events.unshift(action.payload);
        newState.totalCount = newState.events.length;
        newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
        return newState;
      }
      newState.events = [];
      newState.events.unshift(action.payload);
      newState.totalCount = newState.events.length;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      newState.eventCreated = true;
      return newState;

    case ADD_EVENT_FAILURE:
      newState = Object.assign({}, state);
      newState.bookedCenter = true;
      return newState;

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
      newState.isLoading = false;
      newState.totalCount = newState.events.length;
      newState.pageSize = newState.totalCount;
      newState.pageCount = Math.ceil(newState.totalCount / pageLimit);
      return newState;

    case EDIT_EVENT_FAILURE:
      newState = Object.assign({}, state);
      newState.isLoading = false;
      return newState;

    case REMOVE_EVENT:
      newState = Object.assign({}, state);
      newState.sessEvents.events.map((event, index) => {
        if (event.id === action.payload.id) {
          delete newState.sessEvents.events[index];
        }
      });
      newState.sessEvents.meta.totalCount = newState.sessEvents.events.length;
      newState.sessEvents.meta.pageSize = newState.sessEvents.meta.totalCount;
      newState.sessEvents.meta.pageCount =
        Math.ceil(newState.sessEvents.meta.totalCount / pageLimit);
      return newState;

    case SESSION_EVENTS:
      newState = Object.assign({}, state);
      newState.sessEvents = action.payload;
      return newState;

    case SESSION_EVENTS_FAILURE:
      newState = Object.assign({}, state);
      newState.sessEvents = [];
      return newState;

    case LOADMORE_EVENT_FAILURE:
      return {
        ...state,
        loadingmore: false
      };

    case LOADMORE_EVENT_REQUEST:
      return {
        ...state,
        loadmore: true,
        loadingmore: true
      };

    case LOADMORE_EVENT_SUCCESS:
      newState = Object.assign({}, state);
      newState.sessEvents.events = newState.sessEvents.events.concat(action.payload);
      newState.loadingmore = false;
      newState.sessEvents.meta.page = parseInt(
        newState.sessEvents.meta.page + 1,
        10
      );
      newState.sessEvents.meta.pageSize = parseInt(
        newState.sessEvents.meta.pageSize + action.payload.length,
        10
      );
      if (
        newState.sessEvents.meta.pageSize ===
        newState.sessEvents.meta.totalCount
      ) {
        newState.loadmore = false;
      }
      return newState;

    case SEARCH_EVENT_TITLE:
      newState = Object.assign({}, state);
      if (!isEmpty(action.events)) {
        newState.events = action.events;
      } else {
        newState.events = state.events;
      }
      return newState;

    case SEARCH_EVENT_TITLE_FAILED:
      newState = Object.assign({}, state);
      newState.searchFailure = true;
      return newState;

    default:
      return state;
  }
};

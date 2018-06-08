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
let initialState = {
  sessEvents: {
    events: [],
    meta: {}
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_EVENTS:
      newState.sessEvents = action.payload;
      return newState;

    case ADD_EVENT:
      newState = { ...state };
      newState.sessEvents
        .events = [action.payload, ...newState.sessEvents.events];
      newState.sessEvents.meta.totalCount = newState.sessEvents.events.length;
      newState.sessEvents.meta.pageCount = Math
        .ceil(newState.sessEvents.meta.totalCount / pageLimit);
      newState.sessEvents.eventCreated = true;
      return newState;

    case ADD_EVENT_FAILURE:
      newState = {
        ...state,
        centerIsBooked: true
      };
      return newState;

    case EDIT_EVENT_REQUEST:
      return {
        ...state,
        eventToEdit: action.payload,
        editEvent: true
      };

    case EDIT_EVENT:
      newState = {
        ...state,
        isLoading: false,
      };
      newState.sessEvents.events.map((event, index) => {
        if (event.id === action.payload.id) {
          newState.sessEvents.events[index] = action.payload;
        }
      });
      newState.sessEvents.totalCount = newState.sessEvents.events.length;
      newState.sessEvents.pageSize = newState.sessEvents.totalCount;
      newState.sessEvents.pageCount = Math
        .ceil(newState.sessEvents.totalCount / pageLimit);
      return newState;

    case EDIT_EVENT_FAILURE:
      newState = {
        ...state,
        isLoading: false
      };
      return newState;

    case REMOVE_EVENT:
      newState = { ...state };
      newState.sessEvents.events = newState.sessEvents.events
        .filter(event => event.id !== action.payload.id);
      newState.sessEvents.meta.totalCount = newState.sessEvents.events.length;
      newState.sessEvents.meta.pageSize = newState.sessEvents.meta.totalCount;
      newState.sessEvents.meta.pageCount =
        Math.ceil(newState.sessEvents.meta.totalCount / pageLimit);
      return newState;

    case SESSION_EVENTS:
      return {
        ...state,
        sessEvents: action.payload
      };

    case SESSION_EVENTS_FAILURE:
      newState = {
        ...state,
        sessEvents: []
      };
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
      newState = { ...state, loadingmore: false };
      newState.sessEvents.events = newState.sessEvents.events
        .concat(action.payload);
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
      newState = { ...state };
      if (!isEmpty(action.events)) {
        newState.events = action.events;
      } else {
        newState.events = state.events;
      }
      return newState;

    case SEARCH_EVENT_TITLE_FAILED:
      return { ...state, searchFailure: true };

    default:
      return state;
  }
};

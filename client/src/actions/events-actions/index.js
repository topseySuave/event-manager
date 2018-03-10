import { Dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_EVENTS,
  ADD_EVENT,
  EDIT_EVENT,
  EDIT_EVENT_REQUEST,
  REMOVE_EVENT,
  LOADMORE_EVENT_REQUEST,
  LOADMORE_EVENT_SUCCESS,
  LOADMORE_EVENT_FAILURE,
  SEARCH_EVENT_TITLE
} from '../';


/**
 *  @API Route String
 * * */
const api = '/api/v1/events';

/* *
 *  @Event Dispatch Method
 *  @Returns Object
 * * */
const eventsDispatchAction = (type, data = {}) => {
  switch (type) {
    case 'edit':
      return {
        type: EDIT_EVENT,
        payload: data
      };

    case 'edit_request':
      return {
        type: EDIT_EVENT_REQUEST,
        payload: data
      };

    case 'add':
      return {
        type: ADD_EVENT,
        payload: data
      };

    case 'fetch':
      return {
        type: FETCH_EVENTS,
        payload: data
      };

    case 'delete':
      return {
        type: REMOVE_EVENT,
        payload: data
      };

    default:
      return data;
  }
};

export const searchEventsDispatch = data => ({
  type: SEARCH_EVENT_TITLE,
  events: data
});


/* *
 *  @Edit Event Action
 *  @Returns Object
 * * */
export const editEventAction = data => dispatch => axios.put(`${api}/${data.eventId}`, data)
  .then(({ data }) => {
    if (data.statusCode === 201) {
      Materialize.toast(data.message, 5000);
      return dispatch(eventsDispatchAction('edit', data.event));
    }
    return data;
  })
  .catch((err) => {
    Materialize.toast('An error occurred and event cannot be updated', 5000);
  });


/* *
 *  @Create Event Action
 *  @Returns Object
 * * */
export const createEventRequest = data => dispatch => axios.post(api, data)
  .then(({ data }) => {
    if (data.statusCode === 200) {
      return dispatch(eventsDispatchAction('add', data.event));
    } else if (data.statusCode === 400) {
      return data;
    }
  })
  .catch((err) => {
    Materialize.toast('An error occurred and event cannot be created', 5000);
  });


/**
 *  @Fetch Event Action
 *  @Returns Object
 * * */
export const fetchEventRequest = () => dispatch => axios.get(api)
  .then(({ data }) => {
    data.loadingmore = false;
    data.loadmore = false;
    dispatch(eventsDispatchAction('fetch', data));
  });


/* *
 *  @Delete Event Action
 *  @Returns Object
 * * */
export const deleteEventRequest = (id) => {
  id = parseInt(id, 10);
  return dispatch => axios.delete(`${api}/${id}`)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        Materialize.toast(data.message, 5000);
        return dispatch(eventsDispatchAction('delete', data.event));
      }
      Materialize.toast(data.message, 5000);
      return data;
    })
    .catch((err) => {
      Materialize.toast(err.message, 5000);
    });
};


/* *
 *  @Edit Event Request Action
 *  @Returns Object
 * * */
export const editEventRequestAction = data => dispatch => dispatch(eventsDispatchAction('edit_request', data));

/* *
 *  @Load more Event Request Action
 *  @Returns Object
 * * */
export const loadMoreEvents = offset => (dispatch) => {
  dispatch({
    type: LOADMORE_EVENT_REQUEST
  });
  return axios.get(`${api}?next=${offset}`)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        return dispatch({
          type: LOADMORE_EVENT_SUCCESS,
          payload: data.events
        });
      }
      return dispatch({
        type: LOADMORE_EVENT_FAILURE
      });
    });
};

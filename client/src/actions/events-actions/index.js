import { dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_EVENTS,
  ADD_EVENT,
  EDIT_EVENT,
  EDIT_EVENT_REQUEST,
  EDIT_EVENT_FAILURE,
  REMOVE_EVENT,
  LOADMORE_EVENT_REQUEST,
  LOADMORE_EVENT_SUCCESS,
  LOADMORE_EVENT_FAILURE,
  SEARCH_EVENT_TITLE,
  SESSION_EVENTS,
  SESSION_EVENTS_FAILURE,
  EVENT_STATUS_CHANGE,
  ADD_EVENT_FAILURE
} from '../';
import setAuthorizationToken from
  '../../components/authentication/setAuthenticationToken';


/**
 *  @API Route String
 * * */
const api = '/api/v1/events';

/* *
 *  @Event Dispatch Method
 *  @Returns Object
 * * */
export const eventsDispatchAction = (type, data = {}) => {
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

    case 'failure':
      return {
        type: ADD_EVENT_FAILURE
      };

    case 'EDIT_EVENT_FAILURE':
      return {
        type: EDIT_EVENT_FAILURE
      };

    case 'SESSION_EVENTS':
      return {
        type: SESSION_EVENTS,
        payload: data
      };

    case 'SESSION_EVENTS_FAILURE':
      return {
        type: SESSION_EVENTS_FAILURE
      };

    case 'EVENT_STATUS_CHANGE':
      return {
        type: EVENT_STATUS_CHANGE
      };

    case 'LOADMORE_EVENT_REQUEST':
      return {
        type: LOADMORE_EVENT_REQUEST
      };

    case 'LOADMORE_EVENT_SUCCESS':
      return {
        type: LOADMORE_EVENT_SUCCESS,
        payload: data
      };

    case 'LOADMORE_EVENT_FAILURE':
      return {
        type: LOADMORE_EVENT_FAILURE
      };

    default:
      return data;
  }
};

export const searchEventsDispatch = data => ({
  type: SEARCH_EVENT_TITLE,
  events: data
});

export const createEvent = (eventData, imgUrl) => (dispatch) => {
  let token = localStorage.getItem('jwtToken') ? localStorage
    .getItem('jwtToken') : false;
  setAuthorizationToken(token);
  eventData.img_url = imgUrl;
  return axios.post(api, eventData)
    .then(({ data }) => {
      if (data.statusCode === 400) {
        Materialize.toast(data.message, 5000, 'red lighten-2');
        dispatch(eventsDispatchAction('failure'));
      } else {
        dispatch(eventsDispatchAction('add', data.event));
        Materialize.toast(data.message, 5000, 'teal lighten-2');
      }
    })
    .catch((err) => {
      dispatch(eventsDispatchAction('EDIT_EVENT_FAILURE'));
      Materialize.toast('An Error Occurred..!!!', 5000, 'red lighten-2');
    });
};

/* *
 *  Initial Create Event Request Action
 *  @Returns Promise
 * * */
export const createEventRequest = eventData => (dispatch) => {
  if (eventData.img_url.name) {
    let formData = new FormData();
    formData.append('file', eventData.img_url);
    formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(process.env.CLOUDINARY_URL, formData)
      .then(({ data }) => {
        dispatch(createEvent(eventData, data.url));
      })
      .catch((err) => {
        Materialize.toast('Error in connection', 5000, 'red lighten-2');
      });
  }

  return dispatch(createEvent(eventData, ''));
};


/**
 *  @Fetch Event Action
 *  @Returns Object
 * * */
export const fetchEventRequest = () => dispatch => axios.get(api)
  .then(({ data }) => {
    data.loadingmore = false;
    data.loadmore = false;
    data.isLoading = false;
    dispatch(eventsDispatchAction('fetch', data));
  });

export const fetchSessionEventRequest = userId => dispatch => axios
  .get(`${api}?sessionEvents=${userId}`)
  .then(({ data }) => {
    data.isLoading = false;
    if (data) {
      return dispatch(eventsDispatchAction('SESSION_EVENTS', data));
    }
    return dispatch(eventsDispatchAction('SESSION_EVENTS_FAILURE'));
  });

/* *
 *  @Edit Event Request Action
 *  @Returns Object
 * * */
export const editEventRequestAction = data => dispatch =>
  dispatch(eventsDispatchAction('edit_request', data));

const editEvent = (eventData, imgUrl) => (dispatch) => {
  let token = localStorage.getItem('jwtToken') ? localStorage
    .getItem('jwtToken') : false;
  setAuthorizationToken(token);
  eventData.img_url = imgUrl;
  return axios.put(`${api}/${eventData.eventId}`, eventData)
    .then(({ data }) => {
      if (data.statusCode === 201) {
        Materialize.toast(data.message, 5000, 'teal lighten-2');
        $('#add_event_modal').modal('close');
        $('.body__holdr').removeClass('blur__fits');
        return dispatch(eventsDispatchAction('edit', data.event));
      }
      return data;
    });
};

/* *
 *  @Edit Event Action
 *  @Returns Object
 * * */
export const editEventAction = eventData => (dispatch) => {
  if (eventData.img_url.name) {
    let formData = new FormData();
    formData.append('file', eventData.img_url);
    formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(process.env.CLOUDINARY_URL, formData)
      .then(({ data }) => {
        dispatch(editEvent(eventData, data.url));
      })
      .catch(() => {
        Materialize.toast('Error in connection', 5000, 'red lighten-2');
      });
  }
  return dispatch(editEvent(eventData, eventData.img_url));
};

/* *
 *  @Delete Event Action
 *  @Returns Object
 * * */
export const deleteEventRequest = (id) => {
  id = parseInt(id, 10);
  return dispatch => axios.delete(`${api}/${id}`)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        Materialize.toast(data.message, 5000, 'teal lighten-2');
        return dispatch(eventsDispatchAction('delete', data.event));
      }
      Materialize.toast(data.message, 5000, 'red lighten-2');
      return data;
    });
};

/* *
 *  @Load more Event Request Action
 *  @Returns Object
 * * */
export const loadMoreEvents = offset => (dispatch) => {
  dispatch(eventsDispatchAction('LOADMORE_EVENT_REQUEST'));
  return axios.get(`${api}?next=${offset}`)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        return dispatch(eventsDispatchAction('LOADMORE_EVENT_SUCCESS', data
          .events));
      }
      return dispatch(eventsDispatchAction('LOADMORE_EVENT_FAILURE'));
    });
};

/* *
 * Accept a pending event
 * */
export const handleStatusEventAction = (eventId, status) => dispatch =>
  // send status request for event
  axios.post(`${api}/${eventId}?status=${status}`)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        Materialize.toast(data.message, 5000, 'teal lighten-2');
        return dispatch(eventsDispatchAction('EVENT_STATUS_CHANGE'));
      }
      Materialize.toast(data.message, 5000, 'red lighten-2');
    });


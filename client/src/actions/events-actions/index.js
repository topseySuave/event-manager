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
  CLOUDINARY_URL,
  CLOUDINARY_UPLOAD_PRESET
} from '../';
import setAuthorizationToken from '../../components/authentication/setAuthenticationToken';


/**
 *  @API Route String
 * * */
const api = '/api/v1/events';

/**
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

const createEvent = (eventData, imgUrl) => (dispatch) => {
  let token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
  setAuthorizationToken(token);
  eventData.img_url = imgUrl;
  return axios.post(api, eventData)
    .then(({data}) => {
      dispatch(eventsDispatchAction('add', data.event));
      Materialize.toast(data.message, 5000, 'teal');
      location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: EDIT_EVENT_FAILURE
      });
      Materialize.toast('An Error Occurred..!!!', 5000, 'red');
    });
};

/**
 *  Initial Create Event Request Action
 *  @Returns Promise
 * * */
export const createEventRequest = eventData => dispatch => {
  if (eventData.img_url.name) {
    let formData = new FormData();
    formData.append('file', eventData.img_url);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(CLOUDINARY_URL, formData)
      .then(({data}) => {
        dispatch(createEvent(eventData, data.url));
      })
      .catch((err) => {
        Materialize.toast('Error in connection', 5000, 'red');
        console.log(err);
      });
  }

  return dispatch(createEvent(eventData, ''));
};


/**
 *  @Fetch Event Action
 *  @Returns Object
 * * */
export const fetchEventRequest = () => dispatch => axios.get(api)
  .then(({data}) => {
    data.loadingmore = false;
    data.loadmore = false;
    data.isLoading = false;
    dispatch(eventsDispatchAction('fetch', data));
  });

export const fetchSessionEventRequest = userId => dispatch => {
  return axios.get(`${api}?sessionEvents=${userId}`)
    .then(({ data }) => {
      data.isLoading = false;
      if (data) return dispatch({
        type: SESSION_EVENTS,
        payload: data
      });

      return dispatch({
        type: SESSION_EVENTS_FAILURE
      });
    });
};

/**
 *  @Edit Event Request Action
 *  @Returns Object
 * * */
export const editEventRequestAction = data => dispatch => dispatch(eventsDispatchAction('edit_request', data));

const editEvent = (eventData, imgUrl) => dispatch => {
  let token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
  setAuthorizationToken(token);
  eventData.img_url = imgUrl;
  return axios.put(`${api}/${eventData.eventId}`, eventData)
    .then(({ data }) => {
      if (data.statusCode === 201) {
        Materialize.toast(data.message, 5000, 'teal');
        $('#add_event_modal').modal('close');
        $('.body__holdr').removeClass('blur__fits');
        return dispatch(eventsDispatchAction('edit', data.event));
      }
      return data;
    });
};

/**
 *  @Edit Event Action
 *  @Returns Object
 * * */
export const editEventAction = eventData => dispatch => {
  if(eventData.img_url.name){
    let formData = new FormData();
    formData.append('file', eventData.img_url);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(CLOUDINARY_URL, formData)
      .then(({data}) => {
        dispatch(editEvent(eventData, data.url));
      })
      .catch(() => {
        Materialize.toast('Error in connection', 5000, 'red');
      });
  }
  return dispatch(editEvent(eventData, eventData.img_url));
};

/**
 *  @Delete Event Action
 *  @Returns Object
 * * */
export const deleteEventRequest = (id) => {
  id = parseInt(id, 10);
  return dispatch => axios.delete(`${api}/${id}`)
    .then(({data}) => {
      if (data.statusCode === 200) {
        Materialize.toast(data.message, 5000);
        return dispatch(eventsDispatchAction('delete', data.event));
      }
      Materialize.toast(data.message, 5000, 'red');
      return data;
    })
    .catch((err) => {
      Materialize.toast(err.message, 5000, 'red');
    });
};

/**
 *  @Load more Event Request Action
 *  @Returns Object
 * * */
export const loadMoreEvents = offset => (dispatch) => {
  dispatch({
    type: LOADMORE_EVENT_REQUEST
  });
  return axios.get(`${api}?next=${offset}`)
    .then(({data}) => {
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

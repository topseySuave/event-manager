import axios from 'axios';
import { isEmpty } from 'lodash';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { fetchCentersDispatch, searchCenterDispatch } from './center-actions/fetchCenterAction';
import { searchEventsDispatch } from './events-actions/index';
import {
  SEARCH_CENTER_TITLE_FAILED,
  SEARCH_EVENT_TITLE_FAILED
} from './';

const validateCenterSearchQuery = ({
  filterBy, location, price, capacity, search
}) => {
  let searchApi, api;

  if (filterBy) {
    api = `/api/v1/centers?filter=${filterBy}&search=`;
  } else {
    api = '/api/v1/centers?search=';
  }

  if (!isEmpty(location) && location !== 'undefined') {
    searchApi = `${api + location}`;
  } else if (!isEmpty(price) && price !== 'undefined') {
    searchApi = `${api + price}`;
  } else if (!isEmpty(capacity) && capacity !== 'undefined') {
    searchApi = `${api + capacity}`;
  } else if (location && price && capacity) {
    searchApi = `${api + location},${price},${capacity}`;
  } else {
    searchApi = `${api + search}`;
  }

  return searchApi;
};
const validateEventSearchQuery = ({
    filterBy, search
}) => {
    let searchApi, api;

    if (filterBy) {
        api = `/api/v1/events?filter=${filterBy}&search=`;
    } else {
        api = '/api/v1/events?search=';
    }

    if (!isEmpty(search) && search !== 'undefined') {
        searchApi = `${api + search}`;
    }

    return searchApi;
};

export const searchAction = (data) => {
  let searchApi = validateCenterSearchQuery(data);
  return (dispatch) => {
    dispatch(showLoading());
    return axios.get(searchApi)
      .then(({ data }) => {
        if (data.statusCode === 200) {
          dispatch(fetchCentersDispatch(data));
          dispatch(hideLoading());
        } else if (data.statusCode === 404) {
          if (err) Materialize.toast('search result do not match center(s)', 5000, 'rounded');
          dispatch(hideLoading());
        }
      })
      .catch((err) => {
        if (err) Materialize.toast('search result do not match center(s)', 5000, 'rounded');
        dispatch(hideLoading());
      });
  };
};

export const filterCenterTitle = value => (dispatch) => {
    let searchApi = validateCenterSearchQuery(value);
    return axios.get(searchApi)
        .then(({ data }) => {
          if (data.statusCode === 200) {
            dispatch(searchCenterDispatch(data));
          } else if (data.statusCode === 400) {
            Materialize.toast(data.message, 5000);
            dispatch({
              type: SEARCH_CENTER_TITLE_FAILED
            });
          }
        });
};

export const filterEventTitle = value => (dispatch) => {
  let searchApi = validateEventSearchQuery(value);
  return axios.get(searchApi)
      .then(({ data }) => {
        if(data.statusCode === 200){
          dispatch(searchEventsDispatch(data.events));
        } else if (data.statusCode === 400) {
          Materialize.toast(data.message, 5000);
          dispatch({
            type: SEARCH_EVENT_TITLE_FAILED
          });
        }
      });
};

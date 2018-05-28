import axios from 'axios';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import {
  fetchCentersDispatch,
  searchCenterDispatch
} from './center-actions/fetchCenterAction';
import { searchEventsDispatch } from './events-actions/index';
import { SEARCH_CENTER_TITLE_FAILED, SEARCH_EVENT_TITLE_FAILED } from './';

const prepareCenterSearchQuery = (searchVal) => {
  let searchObjectString, searchApi, api = '/api/v1/centers?';
  searchObjectString = queryString.stringify(searchVal, {
    arrayFormat: 'bracket'
  });
  searchApi = `${api}${searchObjectString}`;
  return searchApi;
};

const validateEventSearchQuery = ({ searchBy, search }) => {
  let searchApi, api;

  if (searchBy) {
    api = `/api/v1/events?searchBy=${searchBy}&search=`;
  } else {
    api = '/api/v1/events?search=';
  }

  if (!isEmpty(search) && search !== 'undefined') {
    searchApi = `${api + search}`;
  }

  return searchApi;
};

export const searchAction = (data) => {
  let searchApi = prepareCenterSearchQuery(data);
  return dispatch => axios
    .get(searchApi)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        dispatch(fetchCentersDispatch(data));
      } else if (data.statusCode === 404) {
        if (err) {
          Materialize.toast(
            'search result do not match center(s)',
            5000,
            'red'
          );
        }
      }
    })
    .catch((err) => {
      if (err) {
        Materialize.toast(
          'search result do not match center(s)',
          5000,
          'red'
        );
      }
    });
};

export const filterCenterTitle = value => (dispatch) => {
  let searchApi = prepareCenterSearchQuery(value, 'title');
  return axios.get(searchApi).then(({ data }) => {
    if (data.statusCode === 200) {
      dispatch(searchCenterDispatch(data));
    } else if (data.statusCode === 400) {
      Materialize.toast(data.message, 5000, 'red');
      dispatch(searchCenterDispatch(null, 'SEARCH_CENTER_TITLE_FAILED'));
    }
  });
};

export const filterEventTitle = value => (dispatch) => {
  let searchApi = validateEventSearchQuery(value);
  return axios.get(searchApi).then(({ data }) => {
    if (data.statusCode === 200) {
      dispatch(searchEventsDispatch(data.events));
    } else if (data.statusCode === 400) {
      Materialize.toast(data.message, 5000, 'red');
      dispatch({
        type: SEARCH_EVENT_TITLE_FAILED
      });
    }
  });
};

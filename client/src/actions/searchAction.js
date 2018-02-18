import axios from 'axios';
import { isEmpty } from 'lodash';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { fetchCentersDispatch } from './center-actions/fetchCenterAction';
import { SEARCH_TITLE } from './';

const validateSearchQuery = ({
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

export const searchAction = (data) => {
  let searchApi = validateSearchQuery(data);
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

export const filterTitle = value => (dispatch) => {
  const obj = {
    type: SEARCH_TITLE,
    value
  };
  dispatch(obj);
};

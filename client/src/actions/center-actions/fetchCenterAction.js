import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  FETCH_CENTERS,
  FETCH_CENTER_DETAIL,
  LOADMORE_CENTER_REQUEST,
  LOADMORE_CENTER_SUCCESS,
  LOADMORE_CENTER_FAILURE,
  SEARCH_CENTER_TITLE,
  SEARCH_CENTER_TITLE_FAILED
} from '../';

// init api route string
const api = '/api/v1/centers';

export const fetchCentersDispatch = (data, actionCase = null) => {
  switch (actionCase) {
    case 'FETCH_CENTERS':
      return {
        type: FETCH_CENTERS,
        payload: data
      };

    case 'LOADMORE_CENTER_REQUEST':
      return {
        type: LOADMORE_CENTER_REQUEST,
      };

    case 'LOADMORE_CENTER_SUCCESS':
      return {
        type: LOADMORE_CENTER_SUCCESS,
        payload: data.centers
      };

    case 'LOADMORE_CENTER_FAILURE':
      return {
        type: LOADMORE_CENTER_FAILURE
      };

    default:
      return data;
  }
};

export const searchCenterDispatch = (moreCenters, actionCase = null) => {
  switch (actionCase) {
    case 'SEARCH_CENTER_TITLE_FAILED':
      return { type: SEARCH_CENTER_TITLE_FAILED };

    default:
      return {
        type: SEARCH_CENTER_TITLE,
        payload: moreCenters
      };
  }
};

export const fetchCentersAction = () => (dispatch) => {
  dispatch(showLoading());
  return axios
    .get(api)
    .then(({ data }) => {
      data.loadingmore = false;
      data.loadmore = false;
      dispatch(fetchCentersDispatch(data, 'FETCH_CENTERS'));
      dispatch(hideLoading());
    })
    .catch((err) => {
      Materialize.toast('Error in connection!!!', 5000, 'red');
      throw err;
    });
};

export const loadMoreCenters = offset => (dispatch) => {
  dispatch(fetchCentersDispatch(null, 'LOADMORE_CENTER_REQUEST'));
  return axios
    .get(`${api}?next=${offset}`)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        dispatch(fetchCentersDispatch(data, 'LOADMORE_CENTER_SUCCESS'));
      } else {
        dispatch(fetchCentersDispatch(null, 'LOADMORE_CENTER_FAILURE'));
      }
    })
    .catch((err) => {
      if (err) {
        dispatch(fetchCentersDispatch(null, 'LOADMORE_CENTER_FAILURE'));
      }
    });
};

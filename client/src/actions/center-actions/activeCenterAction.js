import axios from 'axios';
import { FETCH_CENTER_DETAIL, EDIT_CENTER_REQUEST, NOT_FOUND } from '../';

const api = '/api/v1/centers';

export const fetchCenterDispatch = (data, actionCase = null) => {
  switch (actionCase) {
    case 'FETCH_CENTER_DETAIL':
      return {
        type: FETCH_CENTER_DETAIL,
        center: data
      };

    case 'EDIT_CENTER_REQUEST':
      return {
        type: EDIT_CENTER_REQUEST
      };

    case NOT_FOUND:
      return {
        type: NOT_FOUND
      };

    default:
      return data;
  }
};

export const fetchCenterAction = (id) => {
  if (!id) return 'id is required for the request to be successful';
  return dispatch =>
    axios
      .get(`${api}/${id}`)
      .then(({ data }) => {
        dispatch(fetchCenterDispatch(data, 'FETCH_CENTER_DETAIL'));
      })
      .catch((err) => {
        Materialize.toast('Page Not Found!!!', 5000, 'red lighten-4');
        return dispatch(fetchCenterDispatch(null, NOT_FOUND));
      });
};

export const editCenterRequestAction = () => dispatch =>
  dispatch(fetchCenterDispatch(null, 'EDIT_CENTER_REQUEST'));

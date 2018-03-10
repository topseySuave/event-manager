import axios from 'axios';
// import jwtDecode from 'jwt-decode'
import { ADD_CENTER_SUCCESS, ADD_CENTER_REQUEST, ADD_CENTER_FAlLURE, EDIT_CENTER, EDIT_CENTER_FAILURE } from './';

const centerApi = '/api/v1/centers';

const addCenterPayload = (payload, response = null) => {
  if (response === 'success') {
    return {
      type: ADD_CENTER_SUCCESS,
      center: payload
    };
  } else if (response === 'request') {
    return {
      type: ADD_CENTER_REQUEST,
      center: payload
    };
  } else if (response === 'failure') {
    return {
      type: ADD_CENTER_FAlLURE,
      center: payload
    };
  }
};

const updateCenterPayload = (data, res) => {
  if (res === 'success') {
    return {
      type: EDIT_CENTER,
      payload: data
    };
  } else if (res === 'failure') {
    return {
      type: EDIT_CENTER_FAILURE,
      payload: data
    };
  }
};

export const createCenterRequest = centerData => (dispatch) => {
  dispatch(addCenterPayload(centerData, 'request'));
  return axios.post(centerApi, centerData)
    .then(({ data }) => {
      if (data.statusCode === 201) {
        return dispatch(addCenterPayload(data.center, 'success'));
      }
      return dispatch(addCenterPayload(data, 'failure'));
    })
    .catch(err => dispatch(addCenterPayload(err, 'failure')));
};

export const updateCenterRequest = centerData => dispatch => axios.post(`${centerApi}/${centerData.id}`, centerData)
  .then(({ data }) => {
    if (data.statusCode === 200) {
      return dispatch(updateCenterPayload(data, 'success'));
    }
    Materialize.toast(data.message, 5000);
    return data;
  })
  .catch(err => dispatch(updateCenterPayload(err, 'failure')));

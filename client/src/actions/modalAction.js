import axios from 'axios';
import setAuthorizationToken from
  '../components/authentication/setAuthenticationToken';
import {
  ADD_CENTER_SUCCESS,
  ADD_CENTER_REQUEST,
  ADD_CENTER_FAlLURE,
  EDIT_CENTER,
  EDIT_CENTER_FAILURE
} from './';
import history from '../util/history';

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

const createCenter = (centerApi, centerData, imgUrl) => (dispatch) => {
  let token = localStorage.getItem('jwtToken') ? localStorage
    .getItem('jwtToken') : false;
  setAuthorizationToken(token);
  centerData.img_url = imgUrl;
  dispatch(addCenterPayload(centerData, 'request'));
  return axios.post(centerApi, centerData)
    .then(({ data }) => {
      if (data.statusCode === 400) {
        Materialize.toast(data.message, 5000, 'red');
        return dispatch(addCenterPayload(data, 'failure'));
      }
      Materialize.toast(data.message, 5000, 'teal');
      document.getElementById('edit-center-form').reset();
      $('.modal').modal('close');
      return dispatch(addCenterPayload(data.center, 'success'));
    });
};

export const createCenterRequest = centerData => (dispatch) => {
  if (centerData.img_url.name) {
    let formData = new FormData();
    formData.append('file', centerData.img_url);
    formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(process.env.CLOUDINARY_URL, formData)
      .then(({ data }) => {
        dispatch(createCenter(centerApi, centerData, data.url));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return dispatch(createCenter(centerApi, centerData, ''));
};

/* *
 * update center payload sorter
 * ** */
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

/* *
 * update center method
 * requester to local server
 * ** */
const editCenter = (centerApi, centerData, imgUrl) => (dispatch) => {
  let token = localStorage.getItem('jwtToken') ? localStorage
    .getItem('jwtToken') : false;
  setAuthorizationToken(token);
  centerData.img_url = imgUrl;
  return axios.put(centerApi, centerData)
    .then(({ data }) => {
      dispatch(updateCenterPayload(data.centr, 'success'));
      window.location.reload();
    });
};

/* *
 * Initial landing method for edit center request
 * ** */
export const updateCenterRequest = centerData => (dispatch) => {
  if (centerData.img_url.name) {
    let formData = new FormData();
    formData.append('file', centerData.img_url);
    formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(process.env.CLOUDINARY_URL, formData)
      .then(({ data }) => {
        dispatch(editCenter(
          `${centerApi}/${centerData.id}`,
          centerData,
          data.url
        ));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return dispatch(editCenter(
    `${centerApi}/${centerData.id}`,
    centerData,
    centerData.img_url
  ));
};

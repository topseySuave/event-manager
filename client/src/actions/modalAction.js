import axios from 'axios';
import setAuthorizationToken from '../components/authentication/setAuthenticationToken';
// import jwtDecode from 'jwt-decode'
import { ADD_CENTER_SUCCESS, ADD_CENTER_REQUEST, ADD_CENTER_FAlLURE, EDIT_CENTER, EDIT_CENTER_FAILURE, CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET } from './';

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

const createCenter = (centerData, imgUrl) => (dispatch) => {
  let token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : false;
  setAuthorizationToken(token);
  centerData.img_url = imgUrl;
  dispatch(addCenterPayload(centerData, 'request'));
  return axios.post(centerApi, centerData)
    .then(({ data }) => {
      dispatch(addCenterPayload(data.center, 'success'));
      Materialize.toast(data.message, 5000);
      $('.modal').modal('close');
    })
    .catch((err) => {
      console.log(err);
      Materialize.toast('An Error Occurred..!!!', 5000);
      // return console.log(err.response.data.message);
      // if (err.response.data.statusCode === 400) {
      //   console.log(err.response.data.message);
      // }
    });
};

export const createCenterRequest = (centerData) => {
  if (centerData.img_url.name) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setAuthorizationToken(false);
    return axios.post(CLOUDINARY_URL, formData)
      .then(({ data }) => {
        createCenter(centerData, data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return createCenter(centerData, '');
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

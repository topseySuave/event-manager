import axios from 'axios';
// import jwtDecode from 'jwt-decode'
import { ADD_CENTER_SUCCESS, ADD_CENTER_REQUEST, ADD_CENTER_FAlLURE, EDIT_CENTER } from './';

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

const updateCenterPayload = data => ({
  type: EDIT_CENTER,
  payload: data
});

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
      return dispatch(updateCenterPayload(data));
    }
    Materialize.toast(data.message, 5000);
    return data;
  })
  .catch(err => dispatch(addCenterPayload(err, 'failure')));

// let dataToSend = new FormData();
// dataToSend.append('title', centerData.title);
// dataToSend.append('location', centerData.location);
// dataToSend.append('description', centerData.description);
// dataToSend.append('capacity', centerData.capacity);
// dataToSend.append('img_url', centerData.img_url);
// dataToSend.append('facilities', centerData.facilities);
// dataToSend.append('price', centerData.price);

// console.log(centerData);

// for (let key of dataToSend.entries()) {
//     console.log(key[0] + ', ' + key[1]);
// }

// return axios({
//     method: 'POST',
//     url: centerApi,
//     headers: {
//         'x-access-token': token,
//         // 'Content-Type': `multipart/form-data boundary=${dataToSend._boundary}`
//     },
//     data: dataToSend
// })

import axios from 'axios';
import { REMOVE_CENTER } from '../';

const deleteAction = data => ({
  type: REMOVE_CENTER,
  payload: data
});

export const deleteCenterRequest = (id) => {
  let api = '/api/v1/centers/';
  return dispatch => axios.delete(api + id)
    .then(({ data }) => {
      if (data.statusCode === 200) {
        return dispatch(deleteAction(data));
      }
      Materialize.toast(data.message, 5000);
      return {};
    })
    .catch((err) => {
      Materialize.toast(err.message, 5000);
    });
};

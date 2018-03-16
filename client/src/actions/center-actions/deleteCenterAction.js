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
      dispatch(deleteAction(data));
    })
    .catch((err) => {
      Materialize.toast('Center could not be deleted!!!', 5000);
      console.log(err);
    });
};

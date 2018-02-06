import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { FETCH_CENTERS, FETCH_CENTER_DETAIL } from '../';

export const fetchCentersDispatch = data => ({
  type: FETCH_CENTERS,
  centers: data
});

export const fetchCentersAction = () => (dispatch) => {
  dispatch(showLoading());
  return axios.get('/api/v1/centers?order=desc')
    .then(({ data }) => {
      dispatch(fetchCentersDispatch(data));
      dispatch(hideLoading());
    })
    .catch((err) => {
      Materialize.toast('Error in connection!!!', 5000);
      throw (err);
    });
};

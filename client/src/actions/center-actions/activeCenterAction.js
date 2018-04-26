import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { FETCH_CENTER_DETAIL, EDIT_CENTER_REQUEST } from '../';

const api = '/api/v1/centers';

const fetchCenterDispatch = data => ({
  type: FETCH_CENTER_DETAIL,
  center: data
});

export const fetchCenterAction = id => {
  if (!id) return 'id is required for the request to be successful';
  return (dispatch) => {
    dispatch(showLoading());
    return axios.get(`${api}/${id}`)
      .then(({ data }) => {
        dispatch(fetchCenterDispatch(data));
        dispatch(hideLoading());
        // TODO: Allow center to see the events coming in
        console.log('events from center =====> ', data);
      })
      .catch((err) => {
        Materialize.toast('Page Not Found!!!', 5000, 'red lighten-4');
        window.location.href = '/404';
        throw (err);
      });
  };
};

export const editCenterRequestAction = () => dispatch => dispatch({
  type: EDIT_CENTER_REQUEST
});

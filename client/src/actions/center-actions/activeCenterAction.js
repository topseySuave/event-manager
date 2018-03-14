import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { FETCH_CENTER_DETAIL, EDIT_CENTER_REQUEST } from '../';

const fetchCenterDispatch = data => ({
  type: FETCH_CENTER_DETAIL,
  center: data
});

export const fetchCenterAction = (id) => {
  if (!id) return 'id is required for the request to be successful';
  return (dispatch) => {
    dispatch(showLoading());
    return axios.get(`/api/v1/centers/${id}`)
      .then(({ data }) => {
        dispatch(fetchCenterDispatch(data));
        dispatch(hideLoading());
      })
      .catch((err) => {
        Materialize.toast('Page Not Found!!!', 5000);
        window.location.href = '/page-not-found';
        throw (err);
      });
  };
};

export const editCenterRequestAction = () => dispatch => dispatch({
  type: EDIT_CENTER_REQUEST
});

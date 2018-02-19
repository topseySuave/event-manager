import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
    FETCH_CENTERS,
    FETCH_CENTER_DETAIL,
    LOADMORE_CENTER_REQUEST,
    LOADMORE_CENTER_SUCCESS,
    LOADMORE_CENTER_FAILURE,
    SEARCH_CENTER_TITLE
} from '../';

//init api route string
const api = '/api/v1/centers';

export const fetchCentersDispatch = data => ({
  type: FETCH_CENTERS,
  centers: data
});

export const searchCenterDispatch = data => ({
    type: SEARCH_CENTER_TITLE,
    payload: data
});

export const fetchCentersAction = () => (dispatch) => {
  dispatch(showLoading());
  return axios.get(api)
    .then(({ data }) => {
      data.loadingmore = false;
      data.loadmore = false;
      dispatch(fetchCentersDispatch(data));
      dispatch(hideLoading());
    })
    .catch((err) => {
      Materialize.toast('Error in connection!!!', 5000);
      throw (err);
    });
};

export const loadMoreCenters = (offset) => {
  return dispatch => {
    dispatch({
        type: LOADMORE_CENTER_REQUEST
    });
    return axios.get(api + '?next=' + offset)
      .then(({ data }) => {
        if(data.statusCode === 200){
          dispatch({
            type: LOADMORE_CENTER_SUCCESS,
            payload: data.centers
          });
        }else{
          dispatch({
            type: LOADMORE_CENTER_FAILURE
          });
        }
      })
        .catch((err) => {
          if(err){
            dispatch({
              type: LOADMORE_CENTER_FAILURE
            });
          }
        });
  };
};

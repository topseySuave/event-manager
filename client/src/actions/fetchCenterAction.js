import axios from 'axios'
import { FETCH_CENTERS, FETCH_CENTER_DETAIL } from './'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const fetchCentersDispatch = (data) => {
    return {
        type: FETCH_CENTERS,
        centers: data
    }
};

export const fetchCentersAction = () => {
    return dispatch => {
        dispatch(showLoading());
        return axios.get('/api/v1/centers')
            .then(( { data } )=>{
                dispatch(fetchCentersDispatch(data));
                dispatch(hideLoading());
            })
            .catch((err)=>{
                Materialize.toast('Error in connection!!!');
                throw (err);
            });
    }
};

const fetchCenterDispatch = (data) => {
    return {
        type: FETCH_CENTER_DETAIL,
        center: data
    }
};

export const fetchCenterAction = (id) => {
    if(!id) return 'Id is required for the request to be successful';
    return dispatch => {
        dispatch(showLoading());
        return axios.get(`/api/v1/center/${id}`)
            .then(( { data } )=>{
                dispatch(fetchCenterDispatch(data));
                dispatch(hideLoading());
            })
            .catch((err)=>{
                Materialize.toast('Error in connection!!!');
                throw (err);
            });
    }
};
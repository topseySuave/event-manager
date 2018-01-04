import axios from 'axios'
import { FETCH_CENTER_DETAIL } from './'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const fetchCenterDispatch = (data) => {
    return {
        type: FETCH_CENTER_DETAIL,
        center: data
    }
};

export const fetchCenterAction = (id) => {
    if(!id) return 'id is required for the request to be successful';
    return dispatch => {
        dispatch(showLoading());
        return axios.get(`/api/v1/centers/${id}`)
            .then(( { data } )=>{
                dispatch(fetchCenterDispatch(data));
                dispatch(hideLoading());
            })
            .catch((err)=>{
                Materialize.toast('Error in connection!!!', 5000);
                throw (err);
            });
    }
};
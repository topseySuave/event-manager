import axios from 'axios'
import { FETCH_CENTERS } from './'
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
            .then((res)=>{
                dispatch(fetchCentersDispatch(res.data));
                dispatch(hideLoading());
            })
            .catch((err)=>{
                throw (err);
            });
    }
};
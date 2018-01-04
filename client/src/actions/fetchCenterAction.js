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
                Materialize.toast('Error in connection!!!', 5000);
                throw (err);
            });
    }
};
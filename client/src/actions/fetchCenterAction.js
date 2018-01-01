import axios from 'axios'
import { FETCH_CENTERS } from './'

const fetchCentersDispatch = (data) => {
    return {
        type: FETCH_CENTERS,
        centers: data
    }
};

export const fetchCentersAction = () => {
    return dispatch => {
        return axios.get('/api/v1/centers')
            .then((res)=>{
                dispatch(fetchCentersDispatch(res.data));
            })
            .catch((err)=>{
                throw (err);
            });
    }
};
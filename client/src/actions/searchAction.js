import axios from 'axios'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {fetchCentersDispatch} from './fetchCenterAction'

export const searchAction = ({location, price, capacity}) => {
    let searchApi = `/api/v1/centers?search=${location},${price},${capacity}`;
    return dispatch => {
        dispatch(showLoading());
        return axios.get(searchApi)
            .then(({data}) => {
                if (data.statusCode === 200) {
                    dispatch(fetchCentersDispatch(data));
                    dispatch(hideLoading());
                } else if (data.statusCode === 404) {
                    if (err) Materialize.toast('search result do not match center(s)', 5000, 'rounded');
                    dispatch(hideLoading());
                }
            })
            .catch((err) => {
                if (err) Materialize.toast('search result do not match center(s)', 5000, 'rounded');
                dispatch(hideLoading());
            });
    };
};
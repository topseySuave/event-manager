import axios from 'axios';
import { SET_USER } from './index'

const registerSignedUpUser = (data) => {
    return { type: SET_USER, payload: data }
};

const userSignupRequest = (userData) => {
    // return dispatch => {
        return axios.post('/api/v1/users', userData);
    //         .then(res => res.json())
    //         .then(res => dispatch(registerSignedUpUser(res.data)));
    // };
};

const userSignInRequest = (userData) => {
    return axios.post('/api/v1/users/authentication', userData);
};

module.exports = {
    userSignupRequest,
    userSignInRequest,
    registerSignedUpUser
};
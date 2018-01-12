import axios from 'axios';
import jwtDecode from 'jwt-decode'
import setAuthorizationToken from '../components/authentication/setAuthenticationToken'
import { SET_USER, REMOVE_USER } from './index'

const removeCurrentUser = () => {
    return {
        type: REMOVE_USER,
        payload: {}
    }
};

const setCurrentUser = (token) => {
    return {
        type: SET_USER,
        payload: jwtDecode(token)
    }
};

const signOutRequest = () =>{
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    return removeCurrentUser();
};

const userSignupRequest = (userData) => {
    // return dispatch => {
        return axios.post('/api/v1/users', userData);
            // .then(res => dispatch(registerUser(res.data)));
    // };
};

const userSignInRequest = (userData) => {
    return dispatch => {
        return axios.post('/api/v1/users/authentication', userData )
            .then(res =>{
                if(res.data.statusCode === 200){
                    const token = res.data.token;
                    localStorage.setItem('jwtToken', token);
                    setAuthorizationToken(token);
                    return dispatch(setCurrentUser(token));
                }else if(res.data.statusCode === 404 || res.data.statusCode === 401){
                    return false;
                }
            });
    };
};

module.exports = {
    userSignupRequest,
    userSignInRequest,
    signOutRequest,
    setCurrentUser
};
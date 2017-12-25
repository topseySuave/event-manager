import axios from 'axios';
import jwtDecode from 'jwt-decode'
import setAuthorizationToken from '../components/authentication/setAuthenticationToken'
import { SET_USER } from './index'

const registerUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
};

const logout = () => {
    // return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        // dispatch(registerUser({}));
    // }
};

const userSignupRequest = (userData) => {
    // return dispatch => {
        return axios.post('/api/v1/users', userData);
            // .then(res => dispatch(registerUser(res.data)));
    // };
};

const userSignInRequest = (userData) => {
    // return dispatch => {
        return axios.post('/api/v1/users/authentication', userData )
            .then(res =>{
                if(res.data.statusCode === 200){
                    const token = res.data.token;
                    localStorage.setItem('jwtToken', token);
                    setAuthorizationToken(token);
                    if(jwtDecode(token)) return true;
                }else if(res.data.statusCode === 404 || res.data.statusCode === 401){
                    return res.data;
                }
            });
    // };
    };

module.exports = {
    userSignupRequest,
    userSignInRequest,
    registerUser,
    logout,
};
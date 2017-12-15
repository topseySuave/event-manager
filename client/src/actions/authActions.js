import axios from 'axios';

const userSignupRequest = (userData) => {
  return axios.post('/api/v1/users', userData);
};

const userSignInRequest = (userData) => {
    return axios.post('/api/v1/users/authentication', userData);
};

module.exports = {
    userSignupRequest,
    userSignInRequest
};
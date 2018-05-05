import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthorizationToken from "../components/authentication/setAuthenticationToken";
import { SET_USER, REMOVE_USER } from "./index";

const api = "api/v1/users";

const removeCurrentUser = () => {
  window.history.back();
  return {
    type: REMOVE_USER,
    payload: {}
  };
};

const setCurrentUser = token => ({
  type: SET_USER,
  payload: jwtDecode(token)
});

const signOutRequest = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  return removeCurrentUser();
};

const userSignupRequest = userData => axios.post(api, userData);

const userSignInRequest = userData => dispatch =>
  axios.post(`${api}/authentication`, userData).then(res => {
    if (res.data.statusCode === 200) {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      return dispatch(setCurrentUser(token));
    } else if (res.data.statusCode === 404 || res.data.statusCode === 401) {
      return false;
    }
  });

module.exports = {
  userSignupRequest,
  userSignInRequest,
  signOutRequest,
  setCurrentUser
};

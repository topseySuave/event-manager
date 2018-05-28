webpackHotUpdate("main",{

/***/ "./client/src/actions/authActions.js":
/*!*******************************************!*\
  !*** ./client/src/actions/authActions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _setAuthenticationToken = __webpack_require__(/*! ../components/authentication/setAuthenticationToken */ "./client/src/components/authentication/setAuthenticationToken.js");

var _setAuthenticationToken2 = _interopRequireDefault(_setAuthenticationToken);

var _index = __webpack_require__(/*! ./index */ "./client/src/actions/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var api = 'api/v1/users';

var removeCurrentUser = function removeCurrentUser() {
  return {
    type: _index.REMOVE_USER,
    payload: {}
  };
};

var setCurrentUser = function setCurrentUser(token) {
  return {
    type: _index.SET_USER,
    payload: (0, _jwtDecode2.default)(token)
  };
};

var signOutRequest = function signOutRequest() {
  localStorage.removeItem('jwtToken');
  (0, _setAuthenticationToken2.default)(false);
  removeCurrentUser();
  return window.history.back();
};

var userSignupRequest = function userSignupRequest(userData) {
  return _axios2.default.post(api, userData);
};

var userSignInRequest = function userSignInRequest(userData) {
  return function (dispatch) {
    return _axios2.default.post(api + '/authentication', userData).then(function (res) {
      if (res.data.statusCode === 200) {
        var token = res.data.token;

        localStorage.setItem('jwtToken', token);
        (0, _setAuthenticationToken2.default)(token);
        return dispatch(setCurrentUser(token));
      } else if (res.data.statusCode === 404 || res.data.statusCode === 401) {
        return false;
      }
    });
  };
};

module.exports = {
  userSignupRequest: userSignupRequest,
  userSignInRequest: userSignInRequest,
  signOutRequest: signOutRequest,
  setCurrentUser: setCurrentUser,
  removeCurrentUser: removeCurrentUser
};

/***/ })

})
//# sourceMappingURL=hot-update.js.map